import mongoose, {Schema} from "mongoose"
import {AvailableUaerRoles, userRoleENUM} from "../utils/constants.js"

const projectMemberSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    role: {
        type: String,
        enum: AvailableUaerRoles,
        default: userRoleENUM.MEMBER
    }
} , {timestamps: true});

export const ProjectMember = mongoose.model.model( "ProjectMember" ,projectMemberSchema)