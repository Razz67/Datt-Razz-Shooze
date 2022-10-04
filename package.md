********** Dependencies Used **********

** bcrypt — Used for authenticating users in. I need to store the 
password of our users in my database. So, it is never recommended to store plain text 
passwords since they can be compromised easily. So, I use bcrypt library to hash the passwords 
before we save them.


** config — This is a simple package which helps us to store our important data like secret keys, 
database ID etc. in a separate JSON file and it allows us to access it easily within any file.

** jsonwebtoken — Helps to create JWTs for the authentication purposes.

** mongoose — This helps to establish a connection between MongoDB and our Express app.

** validator — Helps us to validate a few things such as emails. It is a small package and is useful for validation.