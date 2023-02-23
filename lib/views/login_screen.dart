import 'package:flutter/material.dart';
import 'package:first/services/auth.dart';
import 'package:provider/provider.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  void initState() {
    _emailController.text = 'user@gmail.com';
    _passwordController.text = '12345678';
    super.initState();
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextFormField(
                  controller: _emailController,
                  validator: (value) =>
                      value!.isEmpty ? 'please enter valid email' : null),
              TextFormField(
                  controller: _passwordController,
                  obscureText: true,
                  enableSuggestions: false,
                  autocorrect: false,
                  validator: (value) =>
                      value!.isEmpty ? 'please enter password' : null),
              const SizedBox(
                height: 10,
              ),
              ElevatedButton(
                // minWidth: double.infinity,
                // color: Colors.blue,
                child:
                    const Text('Login', style: TextStyle(color: Colors.white)),
                onPressed: () {
                  Map creds = {
                    'email': _emailController.text,
                    'password': _passwordController.text,
                    'device_name': 'samsung A71',
                  };
                  if (_formKey.currentState!.validate()) {
                    Provider.of<Auth>(context, listen: false)
                        .login(creds: creds);
                    Navigator.pop(context);
                  }
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}
