# auto-loading
auto-loading is a little AngularJS module which makes easier to manage the loader you want to show
when you make a request with $http object.

## Quick start
To use this tool you only have to use its directive autoLoading.
There are two ways to do this:

##### Adding <auto-loading></auto-lading> into your index.html

```
<head>
...
</head>
<body>
...
<auto-loading></auto-loading> 
</body>
```

##### Adding it dinamically using 'angular.element' or '$'
```
angular.element(document.body).append('<auto-loading></auto-loading>');
```

If you want to ignore specific URLs, you only have to add them passing an array as 'noLoad' directive's parameter
```
<auto-loading noLoad="['']"></auto-loading> 
```


## License
The code is available under the [Apache 2.0 license](LICENSE.txt).