'use strict';

const assert = require('assert');
const definition = require('../package');
const Discord = require('../services/discord');

const SAMPLE_DATA = Buffer.from('DEADBEEF', 'hex');

describe('Discord', function () {
  describe('@fabric/discord', function () {
    it('should be instantiable', function () {
      assert.strictEqual(typeof Discord, 'function');
    });

    xit('should have a correct version attribute', function () {
      const discord = new Discord();
      assert.strictEqual(discord.version, definition.version);
    });

    xit('should implement enable', function () {
      assert.ok(Discord.prototype.enable);
    });
  });
});
