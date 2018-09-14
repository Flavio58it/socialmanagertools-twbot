/**
 * TwitterBot.js
 * =====================
 * Twitter Bot made with love and nodejs
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 * @file:       bot.js
 * @version:    0.1.0
 *
 * @license:    Code and contributions have 'GNU General Public License v3'
 *              This program is free software: you can redistribute it and/or modify
 *              it under the terms of the GNU General Public License as published by
 *              the Free Software Foundation, either version 3 of the License, or
 *              (at your option) any later version.
 *              This program is distributed in the hope that it will be useful,
 *              but WITHOUT ANY WARRANTY; without even the implied warranty of
 *              MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *              GNU General Public License for more details.
 *              You should have received a copy of the GNU General Public License
 *              along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @link        Homepage:     https://twitter.bot.ptkdev.io
 *              GitHub Repo:  https://github.com/social-manager-tools/twitter-bot.js
 */

/**
 * Libs
 * =====================
 * Open source library
 *
 * @link: https://github.com/GoogleChrome/puppeteer
 * @link: https://www.npmjs.com/package/twitterbotlib
 * 
 */
const argv = require("yargs").argv;
const fs = require("fs");
const Bot = require("twitterbotlib");

const config_file = (argv.config ? argv.config : "./configs/config.js");

if (fs.existsSync(config_file)) {
    let bot = new Bot(require(config_file));
    bot.start();
} else {
    throw new Error("Config file not found");
}
