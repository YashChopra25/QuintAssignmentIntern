import mongoose from "mongoose";
import bcrypt from "bcrypt"
import validator from "validator";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: {
            validator: (value) => validator.isEmail(value),
            message: 'Invalid email format',
        },
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps:true
})

UserSchema.pre("save", async function(next){
  try {
      if (this.isModified('password')) {
          this.password = await bcrypt.hash(this.password, 12); 
      }
      next();
  } catch (error) {
      next(error);
  }
});


export const user=mongoose.models.user || mongoose.model("user",UserSchema)
