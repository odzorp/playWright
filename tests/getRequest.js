import {test ,expect} from '@playwright/test';

test('Api Get Request',async (request)=>{
const response = await  request.get('https://reqres.in/api/users/2');

});