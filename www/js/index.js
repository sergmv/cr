/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		var el = document.getElementById("btntest");
		document.addEventListener('click', el, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		
		

        console.log('Received Event: ' + id);
    },
	getAppAvailability: function(){
		var scheme;

		// Don't forget to add the cordova-plugin-device plugin for `device.platform`
		if(device.platform === 'iOS') {
			scheme = 'twitter://';
		}
		else if(device.platform === 'Android') {
			scheme = 'com.twitter.android';
		}

		appAvailability.check(
			scheme,       // URI Scheme or Package Name
			function() {  // Success callback
				console.log(scheme + ' is available :)');
				alert(scheme + ' is available :)');
			},
			function() {  // Error callback
				console.log(scheme + ' is not available :(');
				alert(scheme + ' is not available :(');
			}
		);
	}
	
};
