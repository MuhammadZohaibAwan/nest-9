
//we can use this but better approach is to use mapped-types
// export class UpdateEventDto {
// name? : string;
// description? : string;
// when? : string;
// address? : string;
// }

import { PartialType } from "@nestjs/mapped-types";
import { CreateEventsDto } from './events.dto';

//we are using mapped types here 
//npm i --save @nestjs/mapped-types

export class UpdateEventDto extends PartialType(CreateEventsDto){
    // now we have all the properties of createEventDto but all of them are optional by default 
}