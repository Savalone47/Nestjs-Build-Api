import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsDto } from './dto/items.dto';
import { ItemsInterface } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
	constructor(private readonly  itemservice: ItemsService) {}

	@Get()
	findAll(): Promise<ItemsInterface[]>{
		return this.itemservice.findAll();
	}
	@Get(':id')
	findOne(@Param('id') id): Promise<ItemsInterface>{
		return this.itemservice.findOne(id);
	}
	@Post()
	create(@Body() itemDto: ItemsDto): Promise<ItemsInterface>{
		return this.itemservice.create(itemDto);
	}
	@Put(':id')
	update(@Body() updateDto: ItemsDto, @Param('id') id): Promise<ItemsInterface>{
		return this.itemservice.update(id, updateDto);
	}
	@Delete(':id')
	delete(@Param('id') id): Promise<ItemsInterface>{
		return this.itemservice.delete(id);
	}
}
