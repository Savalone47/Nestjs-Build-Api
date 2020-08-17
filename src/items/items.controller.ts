import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';

@Controller('items')
export class ItemsController {
	@Get()
	findAll():string{
		return 'Get all information';
	}
	@Post()
	create():string{
		return 'post information';
	}
}