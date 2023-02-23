import 'dart:io';

import 'package:dio/dio.dart' as Dio;
import 'package:flutter/material.dart';
import 'package:first/models/user.dart';
import 'package:first/services/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class Auth extends ChangeNotifier {
  bool _isLoggedIn = false;
  late User? _user;
  late String? _token;

  bool get authenticated => _isLoggedIn;
  User? get user => _user;

  final storage = const FlutterSecureStorage();

  void login({required Map creds}) async {
    try {
      Dio.Response response = await dio().post(
        'http://192.168.4.136:8000/api/auth/login',
        queryParameters: {
          "email": creds['email'],
          "password": creds['password'],
          "device_name": creds['device_name'],
        },
        options: Dio.Options(
          responseType: Dio.ResponseType.json,
          validateStatus: (statusCode) {
            if (statusCode == null) {
              return false;
            }
            if (statusCode == 422) {
              // your http status code
              return true;
            } else {
              return statusCode >= 200 && statusCode < 300;
            }
          },
        ),
      );

      String token = response.data['data']['token'].toString();
      tryToken(token: token);
    } catch (e) {}
  }

  void tryToken({String? token}) async {
    if (token == null) {
      return;
    } else {
      try {
        Dio.Response response =
            await dio().get('http://192.168.4.136:8000/api/auth/user',
                options: Dio.Options(headers: {
                  HttpHeaders.contentTypeHeader: "application/json",
                  'Authorization': 'Bearer $token'
                }));
        _isLoggedIn = true;
        _user = User.fromJson(response.data);
        _token = token;
        storeToken(token: token);
        notifyListeners();
      } catch (e) {
        print('oke');
      }
    }
  }

  void storeToken({String? token}) async {
    storage.write(key: 'token', value: token);
  }

  void logout() async {
    try {
      Dio.Response response = await dio().get(
          'http://192.168.4.136:8000/api/auth/logout',
          options: Dio.Options(headers: {'Authorization': 'Bearer $_token'}));

      cleanUp();
      notifyListeners();
    } catch (e) {}
  }

  void cleanUp() async {
    _user = null;
    _isLoggedIn = false;
    _token = null;
    await storage.delete(key: 'token');
  }
}
