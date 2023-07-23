class AppError extends Error {
  constructor(message, status) {
    super(); 
    /*
        We need to call this super() method so that we can call the constructor of the parent
        Error class. Since we are inheriting this class, we need to set up the methods and functions
        in this parent class properly for an instance of the AppError class. 
        That's why :)
     */
    this.message = message;
    this.status = status;
  }
}

module.exports = AppError;