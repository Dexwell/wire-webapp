/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

window.z = window.z || {};
window.z.auth = z.audio || {};

window.z.auth.AccessTokenError = class AccessTokenError extends Error {
  constructor(type) {
    super();
    this.name = this.constructor.name;
    this.stack = (new Error()).stack;
    this.type = type || z.audio.AccessTokenError.TYPE.UNKNOWN;

    switch (this.type) {
      case z.auth.AccessTokenError.TYPE.NOT_FOUND_IN_CACHE:
        this.message = 'No cached access token found in Local Storage';
        break;
      case z.auth.AccessTokenError.TYPE.REFRESH_IN_PROGRESS:
        this.message = 'Access Token request already in progress';
        break;
      case z.auth.AccessTokenError.TYPE.RETRIES_EXCEEDED:
        this.message = 'No. of retries to get Access Token exceeded';
        break;
      case z.auth.AccessTokenError.TYPE.REQUEST_FAILED:
        this.message = 'Request to POST for access token failed';
        break;
      case z.auth.AccessTokenError.TYPE.REQUEST_FORBIDDEN:
        this.message = 'Request to POST for access token forbidden';
        break;
    }
  }

  static get TYPE() {
    return {
      NOT_FOUND_IN_CACHE: 'z.auth.AccessTokenError.TYPE.NOT_FOUND_IN_CACHE',
      REFRESH_IN_PROGRESS: 'z.auth.AccessTokenError.TYPE.REFRESH_IN_PROGRESS',
      REQUEST_FAILED: 'z.auth.AccessTokenError.TYPE.REQUEST_FAILED',
      REQUEST_FORBIDDEN: 'z.auth.AccessTokenError.TYPE.REQUEST_FORBIDDEN',
      RETRIES_EXCEEDED: 'z.auth.AccessTokenError.TYPE.RETRIES_EXCEEDED',
    };
  }
};


