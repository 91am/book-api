import {test, expect} from 'vitest';

// test('true should be true', () => expect(true).toBe(true));

import supertest from 'supertest'
import app from '../src/app'

test('GET /', async () => {
  const response = await supertest(app).get('/')
  expect(response.status).toBe(200)
  expect(response.text).toBe('Hello World!')
})