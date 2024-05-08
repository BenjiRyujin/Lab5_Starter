// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Testing isPhoneNumber
test('valid phone number', ()=>{
  expect(isPhoneNumber('707-419-9023')).toBe(true);
});
test('valid phone number', ()=>{
  expect(isPhoneNumber('(707)419-9023')).toBe(true);
});
test('invalid phone number', ()=>{
  expect(isPhoneNumber(7073419-9023)).toBe(false);
});
test('invalid phone number', ()=>{
  expect(isPhoneNumber('abcdefghijk')).toBe(false);
});

// Testing isEmail
test('valid email', ()=>{
  expect(isEmail('bryujin@ucsd.edu')).toBe(true);
});
test('valid email', ()=>{
  expect(isEmail('bryu18@gmail.com')).toBe(true);
});
test('invalid email', ()=>{
  expect(isEmail('bryujin@ucsd.eduu')).toBe(false);
});
test('invalid email', ()=>{
  expect(isEmail('12988@dog.poop')).toBe(false);
});

// Testing isStrongPassword
test('strong password', ()=>{
  expect(isStrongPassword('B1on_dk')).toBe(true);
});
test('strong password', ()=>{
  expect(isStrongPassword('d125Jks_')).toBe(true);
});
test('weak password', ()=>{
  expect(isStrongPassword('12five!')).toBe(false);
});
test('weak password', ()=>{
  expect(isStrongPassword('Blon)dk!')).toBe(false);
});

// Testing isDate()
test('valid date',()=>{
  expect(isDate('5/17/2002')).toBe(true);
});
test('valid date',()=>{
  expect(isDate('12/3/2002')).toBe(true);
});
test('invalid date',()=>{
  expect(isDate('333/17/2002')).toBe(false);
});
test('invalid date',()=>{
  expect(isDate('5/17/02')).toBe(false);
});

// 


