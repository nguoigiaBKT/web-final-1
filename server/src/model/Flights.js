import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({


    from :
    {type: String,required: true},
    to :
    {type: String,required: true},
    departureTime :
    {type: Date,required: true},
    arrivalTime :
    {type: Date,required: true},
    class:
    {type: String,
        Enumerator: ['Economy','Premium Economy','Business','First'],
        required: true},
    travelType:
        {type: String,
            Enumerator: ['One Way','Round Trip'],
            required: true},
    passengers:
    {type: Number, 
        required: true,
        min: 1}, 
});

 const Flight=mongoose.model('Flight',UserSchema);
    export default Flight;

