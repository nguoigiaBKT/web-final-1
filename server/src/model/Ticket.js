import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
    
    user: 
    {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    flight: 
    {type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true},
    seatNumber:
    {type: String,
    required: true},
    class: 
    {type: String,
    enum: ['Economy', 'Premium Economy', 'Business', 'First'],
    required: true},
    bookingDate:
    {type: Date,
    default: Date.now},
});

const Ticket = mongoose.model('Ticket', TicketSchema);
export default Ticket;