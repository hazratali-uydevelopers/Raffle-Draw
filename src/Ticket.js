const shortId = require('shortid')

class Ticket {

    /**
     * Ticket constractor will recive userName and price
     * @param {String} userName 
     * @param {number} price 
    */

    constructor (userName, price) {
        this.id = shortId.generate()
        this.userName = userName
        this.price = price
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

}

module.exports = Ticket