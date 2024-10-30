/**
 * SerenityEngine JavaScript v1.0.0-pre_1
 * https://www.makigames.net/redirect?l=serenityEngine
 * 
 * Copyright MakiGamesCanada and other contributors.
 * Released under the Apache 2.0 license.
 * https://www.makigames.net/redirect?l=serenityEngine;license
 * 
 * Date: 2024 10 30
 */
const Serenity = (function () {
    "use strict";

    const version = "1.0.0-pre_1";

    /**
     * Vector2 class represents a 2D vector and provides various vector operations.
     * 
     * @since 1.0.0
     * @class
     * @param {number} x - The x-coordinate of the vector.
     * @param {number} y - The y-coordinate of the vector.
     */
    class Vector2 {
        /**
         * Creates an instance of Vector2.
         * @constructor
         * @param {number} x - The x-coordinate of the vector.
         * @param {number} y - The y-coordinate of the vector.
         */
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }

        /**
         * Adds another vector to this vector.
         * @param {Vector2} vector - The vector to add.
         * @returns {Vector2} A new Vector2 instance representing the sum.
         */
        add(vector) {
            return new Vector2(this.x + vector.x, this.y + vector.y);
        }

        /**
         * Subtracts another vector from this vector.
         * @param {Vector2} vector - The vector to subtract.
         * @returns {Vector2} A new Vector2 instance representing the difference.
         */
        subtract(vector) {
            return new Vector2(this.x - vector.x, this.y - vector.y);
        }

        /**
         * Multiplies this vector by a scalar or another vector.
         * @param {number|Vector2} scalar - The scalar or vector to multiply with.
         * @returns {Vector2} A new Vector2 instance representing the product.
         */
        multiply(scalar) {
            if (typeof scalar === 'number') {
                return new Vector2(this.x * scalar, this.y * scalar);
            }
            return new Vector2(this.x * scalar.x, this.y * scalar.y);
        }

        /**
         * Divides this vector by a scalar.
         * @param {number} scalar - The scalar to divide by.
         * @returns {Vector2} A new Vector2 instance representing the quotient.
         */
        divide(scalar) {
            if (scalar === 0) {
                throw new Error("Cannot divide by zero");
            }
            return new Vector2(this.x / scalar, this.y / scalar);
        }

        /**
         * Calculates the magnitude (length) of the vector.
         * @returns {number} The magnitude of the vector.
         */
        magnitude() {
            return Math.sqrt(this.x ** 2 + this.y ** 2);
        }

        /**
         * Normalizes the vector to unit length.
         * @returns {Vector2} A new Vector2 instance representing the normalized vector.
         */
        normalize() {
            const mag = this.magnitude();
            if (mag === 0) return new Vector2(0, 0);
            return this.divide(mag);
        }

        /**
         * Calculates the dot product of this vector and another vector.
         * @param {Vector2} vector - The vector to calculate the dot product with.
         * @returns {number} The dot product.
         */
        dot(vector) {
            return this.x * vector.x + this.y * vector.y;
        }

        /**
         * Returns a string representation of the vector.
         * @returns {string} The string representation of the vector.
         */
        toString() {
            return `Vector2(${this.x}, ${this.y})`;
        }
    }

    /**
     * Vector3 class represents a 3D vector and provides various vector operations.
     * 
     * @since 1.0.0
     * @class
     * @param {number} x - The x-coordinate of the vector.
     * @param {number} y - The y-coordinate of the vector.
     * @param {number} z - The z-coordinate of the vector.
     */
    class Vector3 {
        /**
         * Creates an instance of Vector3.
         * @constructor
         * @param {number} x - The x-coordinate of the vector.
         * @param {number} y - The y-coordinate of the vector.
         * @param {number} z - The z-coordinate of the vector.
         */
        constructor(x = 0, y = 0, z = 0) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        /**
         * Adds another vector to this vector.
         * @param {Vector3} vector - The vector to add.
         * @returns {Vector3} A new Vector3 instance representing the sum.
         */
        add(vector) {
            return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
        }

        /**
         * Subtracts another vector from this vector.
         * @param {Vector3} vector - The vector to subtract.
         * @returns {Vector3} A new Vector3 instance representing the difference.
         */
        subtract(vector) {
            return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
        }

        /**
         * Multiplies this vector by a scalar or another vector.
         * @param {number|Vector3} scalar - The scalar or vector to multiply with.
         * @returns {Vector3} A new Vector3 instance representing the product.
         */
        multiply(scalar) {
            if (typeof scalar === 'number') {
                return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
            }
            return new Vector3(this.x * scalar.x, this.y * scalar.y, this.z * scalar.z);
        }

        /**
         * Divides this vector by a scalar.
         * @param {number} scalar - The scalar to divide by.
         * @returns {Vector3} A new Vector3 instance representing the quotient.
         */
        divide(scalar) {
            if (scalar === 0) {
                throw new Error("Cannot divide by zero");
            }
            return new Vector3(this.x / scalar, this.y / scalar, this.z / scalar);
        }

        /**
         * Calculates the magnitude (length) of the vector.
         * @returns {number} The magnitude of the vector.
         */
        magnitude() {
            return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
        }

        /**
         * Normalizes the vector to unit length.
         * @returns {Vector3} A new Vector3 instance representing the normalized vector.
         */
        normalize() {
            const mag = this.magnitude();
            return mag === 0 ? new Vector3(0, 0, 0) : this.divide(mag);
        }

        /**
         * Calculates the dot product of this vector and another vector.
         * @param {Vector3} vector - The vector to calculate the dot product with.
         * @returns {number} The dot product.
         */
        dot(vector) {
            return this.x * vector.x + this.y * vector.y + this.z * vector.z;
        }

        /**
         * Returns a string representation of the vector.
         * @returns {string} The string representation of the vector.
         */
        toString() {
            return `Vector3(${this.x}, ${this.y}, ${this.z})`;
        }
    }

    /**
     * Color class represents a color in RGBA format.
     * 
     * @since 1.0.0
     * @class
     * @param {number} r - The red component (0-255).
     * @param {number} g - The green component (0-255).
     * @param {number} b - The blue component (0-255).
     * @param {number} a - The alpha component (0-1).
     */
    class Color {
        /**
         * Creates an instance of Color.
         * @constructor
         * @param {number} r - The red component (0-255).
         * @param {number} g - The green component (0-255).
         * @param {number} b - The blue component (0-255).
         * @param {number} a - The alpha component (0-1).
         */
        constructor(r = 0, g = 0, b = 0, a = 1) {
            this.r = this.clamp(r, 0, 255);
            this.g = this.clamp(g, 0, 255);
            this.b = this.clamp(b, 0, 255);
            this.a = this.clamp(a, 0, 1);
        }

        /**
         * Clamps a value between a minimum and maximum.
         * @param {number} value - The value to clamp.
         * @param {number} min - The minimum bound.
         * @param {number} max - The maximum bound.
         * @returns {number} The clamped value.
         */
        clamp(value, min, max) {
            return Math.max(min, Math.min(max, value));
        }

        /**
         * Blends this color with another color.
         * @param {Color} color - The color to blend with.
         * @returns {Color} A new Color instance representing the blended color.
         */
        blend(color) {
            return new Color(
                (this.r + color.r) / 2,
                (this.g + color.g) / 2,
                (this.b + color.b) / 2,
                (this.a + color.a) / 2
            );
        }

        /**
         * Converts the color to a string in RGBA format.
         * @returns {string} The RGBA string representation of the color.
         */
        toString() {
            return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
        }
    }

    /**
     * MathUtilities class provides static utility functions for common math operations.
     * 
     * @since 1.0.0
     */
    class MathUtilities {
        /**
         * Returns the maximum of two numbers.
         * @param {number} a - First number.
         * @param {number} b - Second number.
         * @returns {number} The maximum of the two numbers.
         */
        static max(a, b) {
            return a > b ? a : b;
        }

        /**
         * Returns the minimum of two numbers.
         * @param {number} a - First number.
         * @param {number} b - Second number.
         * @returns {number} The minimum of the two numbers.
         */
        static min(a, b) {
            return a < b ? a : b;
        }

        /**
         * Returns the absolute value of a number.
         * @param {number} x - The number.
         * @returns {number} The absolute value.
         */
        static abs(x) {
            return x < 0 ? -x : x;
        }

        /**
         * Returns the square of a number.
         * @param {number} x - The number.
         * @returns {number} The square of the number.
         */
        static square(x) {
            return x * x;
        }

        /**
         * Returns the square root of a number.
         * @param {number} x - The number.
         * @returns {number} The square root of the number.
         */
        static sqrt(x) {
            return Math.sqrt(x);
        }

        /**
         * Calculates the distance between two points in 2D space.
         * @param {number} x1 - The x-coordinate of the first point.
         * @param {number} y1 - The y-coordinate of the first point.
         * @param {number} x2 - The x-coordinate of the second point.
         * @param {number} y2 - The y-coordinate of the second point.
         * @returns {number} The distance between the two points.
         */
        static distance2D(x1, y1, x2, y2) {
            return Math.sqrt(MathUtilities.square(x2 - x1) + MathUtilities.square(y2 - y1));
        }

        /**
         * Calculates the distance between two points in 3D space.
         * @param {number} x1 - The x-coordinate of the first point.
         * @param {number} y1 - The y-coordinate of the first point.
         * @param {number} z1 - The z-coordinate of the first point.
         * @param {number} x2 - The x-coordinate of the second point.
         * @param {number} y2 - The y-coordinate of the second point.
         * @param {number} z2 - The z-coordinate of the second point.
         * @returns {number} The distance between the two points.
         */
        static distance3D(x1, y1, z1, x2, y2, z2) {
            return Math.sqrt(
                MathUtilities.square(x2 - x1) +
                MathUtilities.square(y2 - y1) +
                MathUtilities.square(z2 - z1)
            );
        }

        /**
         * Converts degrees to radians.
         * @param {number} degrees - The angle in degrees.
         * @returns {number} The angle in radians.
         */
        static degreesToRadians(degrees) {
            return (degrees * Math.PI) / 180;
        }

        /**
         * Converts radians to degrees.
         * @param {number} radians - The angle in radians.
         * @returns {number} The angle in degrees.
         */
        static radiansToDegrees(radians) {
            return (radians * 180) / Math.PI;
        }

        /**
         * Generates a random integer between two values (inclusive).
         * @param {number} min - The minimum value.
         * @param {number} max - The maximum value.
         * @returns {number} A random integer between min and max.
         */
        static randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        /**
         * Clamps a number between a minimum and maximum value.
         * @param {number} value - The value to clamp.
         * @param {number} min - The minimum bound.
         * @param {number} max - The maximum bound.
         * @returns {number} The clamped value.
         */
        static clamp(value, min, max) {
            return Math.max(min, Math.min(max, value));
        }

        /**
         * Linearly interpolates between two values.
         * @param {number} start - The starting value.
         * @param {number} end - The ending value.
         * @param {number} t - The interpolation factor (0 to 1).
         * @returns {number} The interpolated value.
         */
        static lerp(start, end, t) {
            t = MathUtilities.clamp(t, 0, 1); // Ensure t is between 0 and 1
            return start + (end - start) * t;
        }
    }

    /**
     * StringUtilities class provides static utility functions for common string operations.
     * 
     * @since 1.0.0
     */
    class StringUtilities {
        /**
         * Checks if a string contains another substring.
         * @param {string} str - The string to search within.
         * @param {string} substring - The substring to search for.
         * @returns {boolean} True if the substring is found, false otherwise.
         */
        static contains(str, substring) {
            return str.includes(substring);
        }

        /**
         * Counts the number of occurrences of a substring in a string.
         * @param {string} str - The string to search within.
         * @param {string} substring - The substring to count.
         * @returns {number} The count of occurrences.
         */
        static countOccurrences(str, substring) {
            return str.split(substring).length - 1;
        }

        /**
         * Capitalizes the first letter of each word in a string.
         * @param {string} str - The string to capitalize.
         * @returns {string} The capitalized string.
         */
        static capitalizeWords(str) {
            return str.replace(/\b\w/g, char => char.toUpperCase());
        }

        /**
         * Trims whitespace from both ends of a string.
         * @param {string} str - The string to trim.
         * @returns {string} The trimmed string.
         */
        static trim(str) {
            return str.trim();
        }

        /**
         * Reverses a string.
         * @param {string} str - The string to reverse.
         * @returns {string} The reversed string.
         */
        static reverse(str) {
            return str.split('').reverse().join('');
        }

        /**
         * Converts a string to camel case.
         * @param {string} str - The string to convert.
         * @returns {string} The camel cased string.
         */
        static toCamelCase(str) {
            return str
                .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase())
                .replace(/\s+/g, '');
        }

        /**
         * Converts a string to kebab case.
         * @param {string} str - The string to convert.
         * @returns {string} The kebab cased string.
         */
        static toKebabCase(str) {
            return str
                .toLowerCase()
                .replace(/\s+/g, '-') // Replace spaces with -
                .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                .replace(/\-\-+/g, '-') // Replace multiple - with single -
                .trim(); // Trim - from start and end
        }

        /**
         * Converts a string to snake case.
         * @param {string} str - The string to convert.
         * @returns {string} The snake cased string.
         */
        static toSnakeCase(str) {
            return str
                .toLowerCase()
                .replace(/\s+/g, '_') // Replace spaces with _
                .replace(/[^\w\_]+/g, '') // Remove all non-word chars
                .replace(/\_\_+/g, '_') // Replace multiple _ with single _
                .trim(); // Trim _ from start and end
        }

        /**
         * Checks if a string is a palindrome.
         * @param {string} str - The string to check.
         * @returns {boolean} True if the string is a palindrome, false otherwise.
         */
        static isPalindrome(str) {
            const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
            return cleaned === cleaned.split('').reverse().join('');
        }

        /**
         * Replaces all occurrences of a string with another string.
         * @param {string} str - The original string.
         * @param {string} search - The string to search for.
         * @param {string} replace - The string to replace with.
         * @returns {string} The modified string.
         */
        static replaceAll(str, search, replace) {
            return str.split(search).join(replace);
        }

        /**
         * Splits a string into an array of words.
         * @param {string} str - The string to split.
         * @returns {Array<string>} An array of words.
         */
        static splitWords(str) {
            return str.match(/\w+('\w+)?/g) || [];
        }

        /**
         * Truncates a string to a specified length and adds ellipsis if truncated.
         * @param {string} str - The string to truncate.
         * @param {number} length - The maximum length of the string.
         * @returns {string} The truncated string.
         */
        static truncate(str, length) {
            if (str.length <= length) return str;
            return str.slice(0, length) + '...';
        }
    }

    /**
     * AudioManager class provides methods to manage and play audio.
     * 
     * @since 1.0.0
     * @class
     * @classdesc An audio manager
     */
    class AudioManager {
        constructor() {
            this.sounds = {};
        }

        /**
         * Loads an audio file.
         * @param {string} key - The key to identify the sound.
         * @param {string} url - The URL of the audio file.
         */
        load(key, url) {
            const audio = new Audio(url);
            this.sounds[key] = audio;
        }

        /**
         * Resets a sound by its key.
         * @param {string} key - The key of the sound to reset.
         */
        reset(key) {
            if (this.sounds[key]) {
                this.sounds[key].currentTime = 0; // Reset to start
            } else {
                console.error(`Sound with key "${key}" not loaded.`);
            }
        }

        /**
         * Plays a sound by its key.
         * @param {string} key - The key of the sound to play.
         */
        play(key) {
            if (this.sounds[key]) {
                this.sounds[key].play();
            } else {
                console.error(`Sound with key "${key}" not loaded.`);
            }
        }

        /**
         * Pauses a sound by its key.
         * @param {string} key - The key of the sound to pause.
         */
        pause(key) {
            if (this.sounds[key]) {
                this.sounds[key].pause();
            } else {
                console.error(`Sound with key "${key}" not loaded.`);
            }
        }

        /**
         * Stops a sound by its key.
         * @param {string} key - The key of the sound to stop.
         */
        stop(key) {
            if (this.sounds[key]) {
                this.sounds[key].pause();
                this.sounds[key].currentTime = 0; // Reset to start
            } else {
                console.error(`Sound with key "${key}" not loaded.`);
            }
        }
    }

    /**
     * MiscUtilities class provides static utility functions for various operations.
     * 
     * @since 1.0.0
     */
    class MiscUtilities {
        /**
         * Generates a random floating-point number between min and max.
         * @param {number} min - The minimum value.
         * @param {number} max - The maximum value.
         * @returns {number} A random floating-point number between min and max.
         */
        static randomFloat(min, max) {
            return Math.random() * (max - min) + min;
        }

        /**
         * Checks if a number is even.
         * @param {number} num - The number to check.
         * @returns {boolean} True if the number is even, false otherwise.
         */
        static isEven(num) {
            return num % 2 === 0;
        }

        /**
         * Checks if a number is odd.
         * @param {number} num - The number to check.
         * @returns {boolean} True if the number is odd, false otherwise.
         */
        static isOdd(num) {
            return num % 2 !== 0;
        }

        /**
         * Shuffles an array randomly.
         * @param {Array} array - The array to shuffle.
         * @returns {Array} The shuffled array.
         */
        static shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        /**
         * Delays execution for a specified amount of time.
         * @param {number} ms - The delay in milliseconds.
         * @returns {Promise} A promise that resolves after the specified delay.
         */
        static delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        /**
         * Formats a number to a specified number of decimal places.
         * @param {number} num - The number to format.
         * @param {number} decimals - The number of decimal places.
         * @returns {string} The formatted number.
         */
        static formatNumber(num, decimals) {
            return num.toFixed(decimals);
        }

        /**
         * Converts a string to title case.
         * @param {string} str - The string to convert.
         * @returns {string} The title-cased string.
         */
        static toTitleCase(str) {
            return str
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        /**
         * Checks if a value is null or undefined.
         * @param {*} value - The value to check.
         * @returns {boolean} True if the value is null or undefined, false otherwise.
         */
        static isNullOrUndefined(value) {
            return value === null || value === undefined;
        }

        /**
         * Generates a unique identifier (UUID).
         * @returns {string} A random UUID.
         */
        static generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0;
                const v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        /**
         * Returns a random value from a given instance.
         * @since 1.0.0
         * @param {string|Array|Object} instance - The instance to use.
         * @returns {mixed}
         * @example
         * // Example of getting a random character from a string
         * const result = Serenity.misc.getRandom('abc'); // Returns a, b, or c.
         * 
         * // Example of getting a random value from an array
         * // Note: Strings are used in this example, but this supports any type of value.
         * const result = Serenity.misc.getRandom(['a', 'b', 'c']); // Returns a, b, or c.
         * 
         * // Example of getting a random value from an object
         * const result = Serenity.misc.getRandom({a: 'a', b: 'b', c: 'c'}); // Returns a, b, or c.
         */
        static getRandom(instance) {
            if (Array.isArray(instance)) {
                return instance.length !== 0
                    ? instance[Math.floor(Math.random() * instance.length)]
                    : null;
            } else if (typeof instance === 'object') {
                const keys = Object.keys(instance);
                return keys.length !== 0
                    ? instance[keys[Math.floor(Math.random() * keys.length)]]
                    : null;
            } else if (typeof instance === 'string') {
                return instance.charAt(Math.floor(Math.random() * instance.length));
            }
            return null;
        }
    }

    /**
     * Engine class serves as the main loop for the game.
     * 
     * @since 1.0.0
     * @class
     * @classdesc The game engine class
     */
    class Engine {
        constructor() {
            this.lastTime = 0;
            this.isRunning = false;
            this.updateCallbacks = [];
            this.renderCallbacks = [];
        }

        /**
         * Starts the engine and begins the game loop.
         */
        start() {
            this.isRunning = true;
            this.lastTime = performance.now();
            this.gameLoop();
        }

        /**
         * Stops the engine.
         */
        stop() {
            this.isRunning = false;
        }

        /**
         * Main game loop.
         */
        gameLoop() {
            if (!this.isRunning) return;

            const currentTime = performance.now();
            const deltaTime = (currentTime - this.lastTime) / 1000; // Convert to seconds
            this.lastTime = currentTime;

            this.update(deltaTime);
            this.render();

            requestAnimationFrame(() => this.gameLoop());
        }

        /**
         * Updates all registered update callbacks.
         * @param {number} deltaTime - The time in seconds since the last update.
         */
        update(deltaTime) {
            for (const callback of this.updateCallbacks) {
                callback(deltaTime);
            }
        }

        /**
         * Renders all registered render callbacks.
         */
        render() {
            for (const callback of this.renderCallbacks) {
                callback();
            }
        }

        /**
         * Registers an update callback.
         * @param {Function} callback - The update function to register.
         */
        registerUpdate(callback) {
            this.updateCallbacks.push(callback);
        }

        /**
         * Registers a render callback.
         * @param {Function} callback - The render function to register.
         */
        registerRender(callback) {
            this.renderCallbacks.push(callback);
        }
    }

    /**
     * InputManager class handles keyboard and mouse input.
     * 
     * @since 1.0.0
     * @class InputManager
     * @classdesc The input manager
     */
    class InputManager {
        constructor() {
            this.keys = {};
            this.mouse = {
                x: 0,
                y: 0,
                buttons: {}
            };

            this.init();
        }

        /**
         * Initializes event listeners for keyboard and mouse input.
         */
        init() {
            window.addEventListener('keydown', (event) => {
                this.keys[event.code] = true; // Mark the key as pressed
            });

            window.addEventListener('keyup', (event) => {
                this.keys[event.code] = false; // Mark the key as released
            });

            window.addEventListener('mousemove', (event) => {
                this.mouse.x = event.clientX; // Update mouse X position
                this.mouse.y = event.clientY; // Update mouse Y position
            });

            window.addEventListener('mousedown', (event) => {
                this.mouse.buttons[event.button] = true; // Mark mouse button as pressed
            });

            window.addEventListener('mouseup', (event) => {
                this.mouse.buttons[event.button] = false; // Mark mouse button as released
            });
        }

        /**
         * Checks if a specific key is currently pressed.
         * @param {string} key - The keyboard key to check (e.g., 'KeyA').
         * @returns {boolean} True if the key is pressed, false otherwise.
         */
        isKeyPressed(key) {
            return !!this.keys[key];
        }

        /**
         * Gets the current mouse position.
         * @returns {Object} An object containing the X and Y coordinates of the mouse.
         */
        getMousePosition() {
            return { x: this.mouse.x, y: this.mouse.y };
        }

        /**
         * Checks if a specific mouse button is currently pressed.
         * @param {number} button - The mouse button to check (0: left, 1: middle, 2: right).
         * @returns {boolean} True if the mouse button is pressed, false otherwise.
         */
        isMouseButtonPressed(button) {
            return !!this.mouse.buttons[button];
        }
    }

    /**
     * Returns a public API.
     * @returns {Object} The Serenity API.
     */
    return {
        audio: new AudioManager(), // Instantiate AudioManager
        engine: new Engine(),
        input: new InputManager(),
        math: {
            abs: MathUtilities.abs,
            clamp: MathUtilities.clamp,
            degreesToRadians: MathUtilities.degreesToRadians,
            distance2D: MathUtilities.distance2D,
            distance3D: MathUtilities.distance3D,
            lerp: MathUtilities.lerp,
            max: MathUtilities.max,
            min: MathUtilities.min,
            randomInt: MathUtilities.randomInt,
            radiansToDegrees: MathUtilities.radiansToDegrees,
            sqrt: MathUtilities.sqrt,
            square: MathUtilities.square,
            vectors: {
                col3: Color,
                vec2: Vector2,
                vec3: Vector3
            }
        },
        misc: {
            delay: MiscUtilities.delay,
            formatNumber: MiscUtilities.formatNumber,
            generateUUID: MiscUtilities.generateUUID,
            isEven: MiscUtilities.isEven,
            isNullOrUndefined: MiscUtilities.isNullOrUndefined,
            isOdd: MiscUtilities.isOdd,
            randomFloat: MiscUtilities.randomFloat,
            shuffleArray: MiscUtilities.shuffleArray,
            toTitleCase: MiscUtilities.toTitleCase,
            getRandom: MiscUtilities.getRandom
        },
        string: {
            capitalizeWords: StringUtilities.capitalizeWords,
            contains: StringUtilities.contains,
            countOccurrences: StringUtilities.countOccurrences,
            isPalindrome: StringUtilities.isPalindrome,
            replaceAll: StringUtilities.replaceAll,
            reverse: StringUtilities.reverse,
            splitWords: StringUtilities.splitWords,
            toCamelCase: StringUtilities.toCamelCase,
            toKebabCase: StringUtilities.toKebabCase,
            toSnakeCase: StringUtilities.toSnakeCase,
            trim: StringUtilities.trim,
            truncate: StringUtilities.truncate
        }
    };
})();
