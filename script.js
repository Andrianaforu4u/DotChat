(() => {
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var Client = new (function () {
        function _class1() {
            _classCallCheck(this, _class1);
        }
        _createClass(_class1, [{
            key: 'init',
            value: function init() {
                this.chatServer = '';
                this.userName = '';
                this.profilePicture = '';
                this.initiateData();
            }
        }, {
            key: 'initiateData',
            value: function initiateData() {
                const getitems = localStorage.getItem('user-data');
                if (getitems) {
                    const data = JSON.parse(getitems);
                    //
                } else {
                    //
                }
            }
        }, {
            key: 'connectToChatServer',
            value: function initiateCon() {
                this.currentServer = new WebSocket('')
            }
        }]);
        return _class1;
    }())();

    function FetchWasm() {
        return new Promise(async (resolve, reject) => {
            fetch('xero.wasm', {
                credentials: "same-origin"
            }).then((text) => {
                if (!text.ok) throw "Failed to fetch wasm: " + text, reject()
                let wasmBuffer = text.arrayBuffer();
                WebAssembly.compile(wasmBuffer)
                /*
                console.log(wasmBuffer);
                WebAssembly.instantiate(wasmBuffer, {});
                */
                resolve();
            });
        });
    }
    FetchWasm();
})();
