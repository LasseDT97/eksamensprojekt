class Kunde extends User {
    constructor(email, password, firstName, lastName, phoneNumber, KundeID)
    {
        super(email, password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.kundeID = kundeID;
    }
    //Check om github virker
}