class ContactMsg{
    constructor(customerName,email,message){
        this.customerName = customerName;
        this.email = email;
        this.message = message;
        this.dateTime = new Date();
    }
}