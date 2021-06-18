import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as util from '../../util';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.equal(-1, [1, 2, 3].indexOf(5));
		assert.equal(-1, [1, 2, 3].indexOf(0));
	});
});

suite('Function Test Suite', () => {
	test('isASCIIUpper test', () => {
		assert.strictEqual(true, util.isASCIIUpper('A'));
		assert.strictEqual(true, util.isASCIIUpper('Z'));
		assert.strictEqual(false, util.isASCIIUpper('a'));
		assert.strictEqual(false, util.isASCIIUpper('z'));
	});

	test('countUpper test', () => {
		assert.strictEqual(0, util.countUpper("id"));
		assert.strictEqual(1, util.countUpper("Id"));
		assert.strictEqual(2, util.countUpper("ID"));
		assert.strictEqual(1, util.countUpper("Name"));
		assert.strictEqual(3, util.countUpper("UserID"));
	});

	test('gonicCasedName test', () => {
		assert.strictEqual('id', util.gonicCasedName('ID'));
		assert.strictEqual('user_id', util.gonicCasedName('UserID'));
		assert.strictEqual('my_uid', util.gonicCasedName('MyUID'));
		assert.strictEqual('seq_id_tag', util.gonicCasedName('SeqIDTag'));
	});

	test('camelCasedName test', () => {
		assert.strictEqual('iD', util.camelCasedName('ID'));
		assert.strictEqual('userID', util.camelCasedName('UserID'));
		assert.strictEqual('myUID', util.camelCasedName('MyUID'));
		assert.strictEqual('seqIDTag', util.camelCasedName('SeqIDTag'));
	});
});