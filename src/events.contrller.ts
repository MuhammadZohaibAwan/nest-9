import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { CreateEventsDto } from "./events.dto";
import { UpdateEventDto } from "./updateevent.dto";
import { Event } from "./event.entity";

@Controller('/events')
export class EventsController{
private events: Event[] = [];

  @Get()
  findAll() {
    return this.events
  }

  @Get(':id')
    //findOne(@Param('id')id ) {
    //takes id as a root param and decorate it with Param(root param inside) id 
    //id + Param(id) = @Param('id') id
  findOne(@Param() id) {
    //for returning any values remove specified values from @Param()
    // return id
   return this.events.find(event => {
      event.id === parseInt(id)
    })
  }

  @Post() 
  create(@Body()input:CreateEventsDto){
    const event = {
      ...input,
      when : new Date(input.when),
      id : this.events.length +1 
    }
    return event;
  }

  @Patch(':id') 
  update(@Param('id')id,@Body() input:UpdateEventDto){
    const index = this.events.findIndex(event => event.id === parseInt(id))

   this.events[index]=  {
      ...this.events[index],
      ...input,
      when : input.when? 
      new Date(input.when).toString() : this.events[index].when

    }

    return this.events[index]
  }


  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id')id){
  this.events = this.events.filter(event => event.id === parseInt(id))
  }
}