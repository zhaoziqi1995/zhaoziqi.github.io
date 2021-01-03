window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AdAdapter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4d4bDv/iBFupDYdIQdgk0S", "AdAdapter");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    console.log("\u7a0b\u5e8f\u542f\u52a8");
    var AdAdapter = function() {
      function AdAdapter() {}
      AdAdapter.prototype.onMgrNodeLoad = function(mgr) {
        this.mgrNode = mgr;
      };
      AdAdapter.prototype.onMgrNodeDestroy = function(mgr) {
        this.mgrNode === mgr && (this.mgrNode = void 0);
      };
      AdAdapter.prototype.onGameStart = function(onComplete) {
        console.log("\u6e38\u620f\u542f\u52a8\u6210\u529f");
        onComplete();
      };
      AdAdapter.prototype.onEnterScene = function(onComplete) {
        console.log("\u9996\u6b21\u8fdb\u5165\u6e38\u620f\u573a\u666f");
        onComplete();
      };
      AdAdapter.prototype.onReadyGame = function(onComplete) {
        console.log("\u6e38\u620f\u5c31\u7eea\u3001\u8fdb\u5165\u5927\u5385\u3001\u7b49\u5f00\u5f00\u59cb");
        onComplete();
      };
      AdAdapter.prototype.onGoodsExperience = function(goods, onComplete) {
        console.log("\u5546\u54c1\u8bd5\u7528:", goods);
        onComplete(true);
      };
      AdAdapter.prototype.onStartLevel = function(onComplete) {
        console.log("\u5f00\u59cb\u6e38\u620f");
        onComplete();
      };
      AdAdapter.prototype.onFinishedStep = function(onComplete) {
        console.log("\u5b8c\u6210\u5173\u5361\u4e2d\u67d0\u4e00\u6b65\u9aa4");
        onComplete();
      };
      AdAdapter.prototype.onLevelSuccess = function(onComplete) {
        console.log("\u5173\u5361\u80dc\u5229");
        onComplete();
      };
      AdAdapter.prototype.onLevelFail = function(onComplete) {
        console.log("\u5173\u5361\u5931\u8d25");
        onComplete();
      };
      AdAdapter.prototype.onScoreShow = function(onComplete) {
        console.log("\u5c55\u793a\u5f97\u5206\u754c\u9762");
        onComplete();
      };
      AdAdapter.prototype.onScoreGetReward = function(reward, multiple, onComplete, times) {
        void 0 === times && (times = 2);
        console.log("\u70b9\u51fb\u83b7\u53d6\u5956\u52b1:", reward);
        if (multiple) for (var i = 0; i < reward.length; i++) reward[i] *= times;
        onComplete(reward);
      };
      AdAdapter.prototype.onScoreHide = function(onComplete) {
        console.log("\u9690\u85cf\u5f97\u5206\u754c\u9762");
        onComplete();
      };
      AdAdapter.prototype.onFinishedLevel = function(onComplete) {
        console.log("\u64ad\u653e\u540e\u7eed\u52a8\u753b\u6216\u7279\u6548\u540e\uff0c\u5b8c\u6210\u5173\u5361");
        onComplete();
      };
      AdAdapter.prototype.onApplyRestartStep = function(onComplete) {
        console.log("\u8bf7\u6c42\u91cd\u65b0\u5f00\u59cb\u6b65\u9aa4");
        onComplete(true);
      };
      AdAdapter.prototype.onApplyRestartLevel = function(onComplete) {
        console.log("\u8bf7\u6c42\u91cd\u65b0\u5f00\u59cb\u5173\u5361");
        onComplete(true);
      };
      AdAdapter.prototype.onApplyAnswer = function(onComplete) {
        console.log("\u8bf7\u6c42\u63d0\u793a");
        onComplete(true);
      };
      AdAdapter.prototype.onApplyRevive = function(onComplete) {
        console.log("\u8bf7\u6c42\u590d\u6d3b");
        onComplete(true);
      };
      AdAdapter.prototype.onApplySkipStep = function(onComplete) {
        console.log("\u8bf7\u6c42\u8df3\u8fc7\u6b65\u9aa4");
        onComplete(true);
      };
      AdAdapter.prototype.onApplySkipLevel = function(onComplete) {
        console.log("\u8bf7\u6c42\u8df3\u8fc7\u5173\u5361");
        onComplete(true);
      };
      AdAdapter.prototype.onApplyBuy = function(goods, onComplete) {
        console.log("\u8bf7\u6c42\u8d2d\u4e70\u5546\u54c1:", goods);
        onComplete(true);
      };
      AdAdapter.prototype.onOpenShop = function(onComplete) {
        console.log("\u6253\u5f00\u5546\u5e97");
        onComplete();
      };
      AdAdapter.prototype.onCloseShop = function(onComplete) {
        console.log("\u5173\u95ed\u5546\u5e97");
        onComplete();
      };
      AdAdapter.prototype.onOpenSignin = function(onComplete) {
        console.log("\u6253\u5f00\u7b7e\u5230");
        onComplete();
      };
      AdAdapter.prototype.onCloseSignin = function(onComplete) {
        console.log("\u5173\u95ed\u7b7e\u5230");
        onComplete();
      };
      AdAdapter.prototype.onOpenSetting = function(onComplete) {
        console.log("\u6253\u5f00\u8bbe\u7f6e");
        onComplete();
      };
      AdAdapter.prototype.onCloseSetting = function(onComplete) {
        console.log("\u5173\u95ed\u8bbe\u7f6e");
        onComplete();
      };
      AdAdapter.prototype.onOpenLuckDraw = function(onComplete) {
        console.log("\u6253\u5f00\u62bd\u5956");
        onComplete();
      };
      AdAdapter.prototype.onCloseLuckDraw = function(onComplete) {
        console.log("\u5173\u95ed\u62bd\u5956");
        onComplete();
      };
      AdAdapter.prototype.onOpenPlayerUI = function(onComplete) {
        console.log("\u6253\u5f00\u89d2\u8272\u4fe1\u606f\u3001\u52a0\u70b9\u3001\u6280\u80fd");
        onComplete();
      };
      AdAdapter.prototype.onClosePlayerUI = function(onComplete) {
        console.log("\u5173\u95ed\u89d2\u8272\u4fe1\u606f\u3001\u52a0\u70b9\u3001\u6280\u80fd");
        onComplete();
      };
      AdAdapter.prototype.onOpenCollectUI = function(onComplete) {
        console.log("\u6253\u5f00\u6536\u85cf\u754c\u9762");
        onComplete();
      };
      AdAdapter.prototype.onCloseCollectUI = function(onComplete) {
        console.log("\u5173\u95ed\u6536\u85cf\u754c\u9762");
        onComplete();
      };
      return AdAdapter;
    }();
    exports.default = AdAdapter;
    cc._RF.pop();
  }, {} ],
  AdMgrNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1c03KhHtlN7JsXZk50j7RF", "AdMgrNode");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AdMgrNode = function(_super) {
      __extends(AdMgrNode, _super);
      function AdMgrNode() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AdMgrNode.prototype.onLoad = function() {
        GGlobal_1.default.ad && GGlobal_1.default.ad.onMgrNodeLoad(this);
      };
      AdMgrNode.prototype.onDestroy = function() {
        GGlobal_1.default.ad && GGlobal_1.default.ad.onMgrNodeDestroy(this);
      };
      AdMgrNode = __decorate([ ccclass ], AdMgrNode);
      return AdMgrNode;
    }(cc.Component);
    exports.default = AdMgrNode;
    cc._RF.pop();
  }, {
    "../GGlobal": "GGlobal"
  } ],
  Animator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f7b5GSyr1EgpomByJ7X18P", "Animator");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AnimatorDefine = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple;
    var Template = [ {
      id: "start",
      aniName: null,
      playTimes: 1,
      controllers: {
        aim: "Example"
      }
    }, {
      id: "end",
      aniName: null,
      playTimes: 1,
      controllers: {
        aim: "start"
      }
    }, {
      id: "Example",
      controllers: [ {
        aim: "end",
        condition: [ {
          property: "stand",
          value: true,
          Invert: true
        }, {
          property: "move",
          value: true
        } ],
        priority: 2
      } ],
      aniName: "run",
      playTimes: -1,
      speed: 1
    } ];
    var AniPlayerType;
    (function(AniPlayerType) {
      AniPlayerType[AniPlayerType["CCAniamtion"] = 0] = "CCAniamtion";
      AniPlayerType[AniPlayerType["DragonBones"] = 1] = "DragonBones";
      AniPlayerType[AniPlayerType["Spine"] = 2] = "Spine";
    })(AniPlayerType || (AniPlayerType = {}));
    var Animator = function(_super) {
      __extends(Animator, _super);
      function Animator() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.stateMachineFile = null;
        _this.aniPlayerType = AniPlayerType.DragonBones;
        _this.onAnimatorEvent = [];
        _this.mapAnimationState = {};
        _this.propertys = {};
        _this.requreStateCheck = false;
        _this.nextRequreStateCheck = false;
        _this.lateDelKey = [];
        _this.currPlayState = {
          startTime: 0
        };
        return _this;
      }
      Object.defineProperty(Animator.prototype, "stateId", {
        get: function() {
          return this.currState.id;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Animator.prototype, "startTime", {
        get: function() {
          return this.currPlayState.startTime;
        },
        enumerable: false,
        configurable: true
      });
      Animator.prototype.onEnable = function() {
        if (!this.aniPlayer) switch (this.aniPlayerType) {
         case dbsPlayer.type:
          this.aniPlayer = new dbsPlayer(this);
          break;

         default:
          return;
        }
        if (!this.aniPlayer) return;
        this.aniPlayer.on(this.onEvent);
        this.sortControllers();
        this.anyState = this.getState(AnimatorDefine.any);
        this.currState = this.getState(AnimatorDefine.start);
        this.StateCheck(this.currState);
      };
      Animator.prototype.onDisable = function() {
        this.aniPlayer.off(this.onEvent);
        this.propertys = {};
      };
      Animator.prototype.lateUpdate = function() {
        if (this.nextRequreStateCheck) {
          this.nextRequreStateCheck = false;
          this.requreStateCheck = true;
        }
        this.requreStateCheck && this.StateCheck(this.currState);
        this.anyState && this.anyState.controllers && this.StateCheck(this.anyState);
        for (var _i = 0, _a = this.lateDelKey; _i < _a.length; _i++) {
          var iterator = _a[_i];
          this.removeProperty(iterator);
        }
        this.lateDelKey.length = 0;
        this.requreStateCheck = false;
      };
      Animator.prototype.sortControllers = function() {
        for (var i = 0, len = this.stateMachineFile.json.length; i < len; i++) {
          var s = this.stateMachineFile.json[i];
          this.mapAnimationState[s.id] = i;
          if (!(s.controllers instanceof Array)) continue;
          s.controllers.sort(function(a, b) {
            if (a === b) return 0;
            if (void 0 === a) return 1;
            if (void 0 === b) return -1;
            return a.priority > b.priority ? -1 : 1;
          });
        }
      };
      Animator.prototype.getData = function(index) {
        return this.stateMachineFile.json[index];
      };
      Animator.prototype.getState = function(key) {
        var index = this.mapAnimationState[key];
        if ("number" !== typeof index) return null;
        return this.getData(index);
      };
      Animator.prototype.setSpeed = function(key, value) {
        var s = this.getState(key);
        s && (s.realSpeed = ("number" === typeof s.speed ? s.speed : 1) * value);
      };
      Animator.prototype.setProperty = function(key, value) {
        if (this.propertys[key] === value) return;
        this.propertys[key] = value;
        this.requreStateCheck = true;
      };
      Animator.prototype.setEvent = function(key) {
        this.setProperty(key, this.currState.id);
        this.lateDelKey.indexOf(key) < 0 && this.lateDelKey.push(key);
      };
      Animator.prototype.getProperty = function(key) {
        return this.propertys[key];
      };
      Animator.prototype.removeProperty = function(key) {
        var v = this.getProperty(key);
        if (this.propertys.hasOwnProperty(key)) {
          delete this.propertys[key];
          this.requreStateCheck = true;
        }
        return v;
      };
      Animator.prototype.cleanPropertys = function() {
        this.propertys = {};
        this.requreStateCheck = true;
      };
      Animator.prototype.StateCheck = function(s) {
        if (!s) return;
        if (s.controllers instanceof Array) {
          var len = s.controllers.length;
          for (var i = 0; i < len; i++) {
            var ctrl = s.controllers[i];
            if (!ctrl.aim || 0 === ctrl.aim.length) continue;
            if (this.ControllerCheck(ctrl)) break;
          }
        } else {
          var ctrl = s.controllers;
          this.ControllerCheck(ctrl);
        }
      };
      Animator.prototype.ControllerCheck = function(ctrl) {
        if (this.currState.id === ctrl.aim) return false;
        var s = this.getState(ctrl.aim);
        if (!s) return false;
        if (!ctrl.condition) {
          if (!this.currState.aniName || this.propertys[AnimatorDefine.FINISHED] === this.currState.id) {
            this.onStateChange(s);
            return true;
          }
          return false;
        }
        for (var _i = 0, _a = ctrl.condition; _i < _a.length; _i++) {
          var cod = _a[_i];
          if (this.propertys[cod.property] === cod.value) {
            if (cod.Invert) return false;
          } else if (!cod.Invert) return false;
        }
        this.onStateChange(s);
        return true;
      };
      Animator.prototype.onStateChange = function(s) {
        if (this.currState === s) return;
        this.aniPlayer && (s.aniName ? this.aniPlayer.play(s) : this.onEvent(AnimatorDefine.FINISHED));
        this.onEvent(AnimatorDefine.EXIT);
        this.currState = s;
        this.resetStartTime();
        this.nextRequreStateCheck = true;
      };
      Animator.prototype.resetStartTime = function() {
        this.currPlayState.startTime = cc.director.getTotalTime();
      };
      Animator.prototype.changeCheck = function(dt) {
        this.requreStateCheck = true;
      };
      Animator.prototype.onEvent = function(e) {
        var duration = cc.director.getTotalTime() - this.currPlayState.startTime;
        switch (e) {
         case AnimatorDefine.PLAY:
         case AnimatorDefine.LASTFRAME:
         case AnimatorDefine.FINISHED:
          this.removeProperty(AnimatorDefine.PLAY);
          this.removeProperty(AnimatorDefine.LASTFRAME);
          this.removeProperty(AnimatorDefine.FINISHED);
          this.setProperty(e, this.currState.id);
          break;

         default:
          this.setEvent(e);
        }
        cc.Component.EventHandler.emitEvents(this.onAnimatorEvent, e, this.currState.id, duration);
      };
      Animator.prototype.addChangeLinsener = function(target, component, handler, customEventData) {
        var e = new cc.Component.EventHandler();
        e.target = target;
        e.component = component;
        e.handler = handler;
        customEventData && (e.customEventData = customEventData);
        this.onAnimatorEvent.push(e);
      };
      Animator.prototype.removeChangeLinsener = function(target, component, handler, customEventData) {
        var e = new cc.Component.EventHandler();
        e.target = target;
        e.component = component;
        e.handler = handler;
        customEventData && (e.customEventData = customEventData);
        this.onAnimatorEvent.push(e);
        for (var index = this.onAnimatorEvent.length - 1; index >= 0; index--) {
          var element = this.onAnimatorEvent[index];
          if (element.target !== target) continue;
          if (element.component !== component) continue;
          if (element.handler !== handler) continue;
          if (!element.customEventData && !customEventData) continue;
          if (element.customEventData !== customEventData) continue;
          this.onAnimatorEvent.splice(index, 1);
        }
      };
      __decorate([ property({
        type: cc.JsonAsset
      }) ], Animator.prototype, "stateMachineFile", void 0);
      __decorate([ property({
        type: cc.Enum(AniPlayerType)
      }) ], Animator.prototype, "aniPlayerType", void 0);
      __decorate([ property([ cc.Component.EventHandler ]) ], Animator.prototype, "onAnimatorEvent", void 0);
      Animator = __decorate([ ccclass, disallowMultiple ], Animator);
      return Animator;
    }(cc.Component);
    exports.default = Animator;
    var AnimatorDefine;
    (function(AnimatorDefine) {
      AnimatorDefine["start"] = "start";
      AnimatorDefine["end"] = "end";
      AnimatorDefine["any"] = "any";
      AnimatorDefine["PLAY"] = "PLAY";
      AnimatorDefine["LASTFRAME"] = "LASTFRAME";
      AnimatorDefine["FINISHED"] = "FINISHED";
      AnimatorDefine["FRAMEEVENT"] = "FRAMEEVENT";
      AnimatorDefine["EXIT"] = "EXIT";
      AnimatorDefine["invoke"] = "onAnimatorEvent";
    })(AnimatorDefine = exports.AnimatorDefine || (exports.AnimatorDefine = {}));
    var AniPlayerEventDispatcher = function() {
      function AniPlayerEventDispatcher(target) {
        this.events = [];
        this.target = target;
      }
      AniPlayerEventDispatcher.prototype.on = function(listener) {
        if (this.events.indexOf(listener) > 0) return;
        this.events.push(listener);
      };
      AniPlayerEventDispatcher.prototype.off = function(listener) {
        var i = this.events.indexOf(listener);
        if (i >= 0) {
          this.events.splice(i, 1);
          return;
        }
      };
      AniPlayerEventDispatcher.prototype.release = function() {
        this.events.length = 0;
      };
      AniPlayerEventDispatcher.prototype.emit = function(event) {
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
          var iterator = _a[_i];
          iterator.call(this.target, event);
        }
      };
      return AniPlayerEventDispatcher;
    }();
    var dbsPlayer = function(_super) {
      __extends(dbsPlayer, _super);
      function dbsPlayer(target) {
        var _this = _super.call(this, target) || this;
        _this.dbs = target.getComponent(dragonBones.ArmatureDisplay);
        _this.dbs.on(dragonBones.EventObject.START, _this.dbsEvent, _this);
        _this.dbs.on(dragonBones.EventObject.LOOP_COMPLETE, _this.dbsEvent, _this);
        _this.dbs.on(dragonBones.EventObject.COMPLETE, _this.dbsEvent, _this);
        _this.dbs.on(dragonBones.EventObject.FRAME_EVENT, _this.dbsEvent, _this);
        return _this;
      }
      dbsPlayer.prototype.release = function() {
        _super.prototype.release.call(this);
        this.dbs.off(dragonBones.EventObject.COMPLETE, this.dbsEvent, this);
        this.dbs.off(dragonBones.EventObject.START, this.dbsEvent, this);
        this.dbs.off(dragonBones.EventObject.LOOP_COMPLETE, this.dbsEvent, this);
        this.dbs.off(dragonBones.EventObject.FRAME_EVENT, this.dbsEvent, this);
      };
      dbsPlayer.prototype.play = function(arg) {
        this.dbs.timeScale = "number" === typeof arg.speed ? 1 / arg.speed : 1;
        this.dbs.playAnimation(arg.aniName, "number" === typeof arg.playTimes ? arg.playTimes : -1);
      };
      dbsPlayer.prototype.dbsEvent = function(event) {
        switch (event.type) {
         case "start":
          this.emit(AnimatorDefine.PLAY);
          break;

         case "loopComplete":
          this.emit(AnimatorDefine.LASTFRAME);
          break;

         case "complete":
          this.emit(AnimatorDefine.FINISHED);
          break;

         case "frameEvent":
          this.emit(event.name);
        }
      };
      dbsPlayer.type = AniPlayerType.DragonBones;
      return dbsPlayer;
    }(AniPlayerEventDispatcher);
    var StartState = function() {
      function StartState(next) {
        this.id = AnimatorDefine.start;
        this.aniName = null;
        this.playTimes = 1;
        this.controllers = {
          aim: next
        };
      }
      return StartState;
    }();
    var EndState = function() {
      function EndState() {
        this.id = AnimatorDefine.end;
        this.aniName = null;
        this.playTimes = 1;
        this.controllers = {
          aim: AnimatorDefine.start
        };
      }
      return EndState;
    }();
    var AnyState = function() {
      function AnyState() {
        this.id = AnimatorDefine.any;
        this.aniName = null;
        this.playTimes = 1;
      }
      return AnyState;
    }();
    cc._RF.pop();
  }, {} ],
  AssetMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "185b9goRGFDVpjcJCKJAa74", "AssetMgr");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AssetMgr = void 0;
    var AssetMgr = function() {
      function AssetMgr() {
        this.assetsDic = {};
        this.testdata = false;
      }
      AssetMgr.prototype.loadBundle = function(bd, onComplete) {
        var bundle = cc.assetManager.getBundle("level");
        if (bundle) {
          if (bd.loaded) {
            var res = bundle.get(bd.path, bd.type);
            if (res) {
              onComplete(null, res);
              return res;
            }
          }
          bundle.load(bd.path, bd.type, function(err, res) {
            onComplete(err, res);
            res && (bd.loaded = true);
          });
          return;
        }
        cc.assetManager.loadBundle(bd.bundle, function(err, bundle) {
          if (err) {
            onComplete(err, null);
            return;
          }
          bundle.load(bd.path, bd.type, function(err1, res) {
            onComplete(err1, res);
            res && (bd.loaded = true);
          });
        });
      };
      AssetMgr.prototype.loadBundleAsync = function(bd) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              _this.loadBundle(bd, function(err, res) {
                if (err) {
                  reject(err);
                  return;
                }
                resolve(res);
              });
            }) ];
          });
        });
      };
      AssetMgr.prototype.loadFromBundle = function(bd, key, onComplete) {
        var _this = this;
        return this.loadBundle(bd, function(err, res) {
          err && console.error(err);
          _this.setAsset(key, res);
          onComplete && onComplete(res);
        });
      };
      AssetMgr.prototype.preloadAsync = function(key) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              _this.preload(key, resolve);
            }) ];
          });
        });
      };
      AssetMgr.prototype.setAsset = function(key, value) {
        value && value.isValid && (this.assetsDic[key] = value);
      };
      AssetMgr.prototype.getAsset = function(key, type) {
        var res = this.assetsDic[key];
        if (!res) {
          res = this.preload(key);
          if (this.assetsDic[key]) res = this.assetsDic[key]; else {
            if (!res) return;
            this.assetsDic[key] = res;
          }
        }
        if (res instanceof type) return res;
        return;
      };
      AssetMgr.prototype.preload = function(key, onComplete) {
        var bd = this.key2bd(key);
        if (bd) return this.loadFromBundle(bd, key, onComplete);
        onComplete && onComplete();
      };
      AssetMgr.prototype.preloadBG = function() {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) keys[_i] = arguments[_i];
        var bdList = [];
        for (var i = 0, len = keys.length; i < len; i++) {
          var item = keys[i];
          if (!item) continue;
          var bd = this.key2bd(item);
          if (!bd) continue;
          bdList.push(bd);
        }
        bdList.length > 0 && this.preloadBdBG(bdList);
      };
      AssetMgr.prototype.preloadBdBG = function(bd) {
        var dic = {};
        for (var i = 0, len = bd.length; i < len; i++) {
          var item = bd[i];
          if (!item) continue;
          item.bundle in dic ? dic[item.bundle].indexOf(item.path) < 0 && dic[item.bundle].push(item.path) : dic[item.bundle] = [ item.path ];
        }
        var _loop_1 = function(key) {
          if (!Object.prototype.hasOwnProperty.call(dic, key)) return "continue";
          var element = dic[key];
          cc.assetManager.loadBundle(key, function(err, bundle) {
            bundle && bundle.preload(element);
          });
        };
        for (var key in dic) _loop_1(key);
      };
      AssetMgr.prototype.key2bd = function(key) {
        key;
        return;
      };
      return AssetMgr;
    }();
    exports.AssetMgr = AssetMgr;
    cc._RF.pop();
  }, {} ],
  AudioMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd2afI7e6tIgrY3ea8e50I4", "AudioMgr");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AudioMgr = exports.audioMgrInst = void 0;
    var UtilFunc_1 = require("./UtilFunc");
    var AudioMgr = function() {
      function AudioMgr() {
        this.clips = [];
        this.channels = {};
        this.musicVolume = 1;
        this.effectsVolume = 1;
      }
      AudioMgr.prototype.init = function(setting, clips) {
        void 0 === clips && (clips = []);
        this.updateClips(clips);
        this.setting = setting;
        return this;
      };
      AudioMgr.prototype.updateClips = function(clips) {
        void 0 === clips && (clips = []);
        for (var i = 0; i < clips.length; i++) {
          var element = clips[i];
          if (element) {
            var old = this.clips[i];
            old && old instanceof cc.AudioClip && old.decRef();
            this.clips[i] = element;
            element instanceof cc.AudioClip && element.addRef();
          }
        }
      };
      AudioMgr.prototype.release = function() {
        this.clips.length = 0;
        this.setting = {
          audio: false,
          vibrate: false
        };
        this.channels = {};
        this.musicVolume = 1;
        this.effectsVolume = 1;
      };
      AudioMgr.prototype.stopAll = function() {
        this.stopMusic();
        this.stopAllEffects();
      };
      AudioMgr.prototype.shortMute = function() {
        this.musicVolume = cc.audioEngine.getMusicVolume();
        this.effectsVolume = cc.audioEngine.getEffectsVolume();
        cc.audioEngine.setMusicVolume(0);
        cc.audioEngine.setEffectsVolume(0);
      };
      AudioMgr.prototype.shortResume = function() {
        cc.audioEngine.setMusicVolume(this.musicVolume);
        cc.audioEngine.setEffectsVolume(this.effectsVolume);
      };
      AudioMgr.prototype.resumeAll = function() {
        this.stopMusic();
        this.stopAllEffects();
      };
      AudioMgr.prototype.setAudioMgrInst = function() {
        if (exports.audioMgrInst === this) return;
        exports.audioMgrInst && exports.audioMgrInst.stopAll();
        exports.audioMgrInst = this;
      };
      AudioMgr.prototype.getClip = function(a) {
        return __awaiter(this, void 0, Promise, function() {
          var clip;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!("string" === typeof a)) return [ 3, 2 ];
              return [ 4, UtilFunc_1.LoadRes(a, cc.AudioClip) ];

             case 1:
              return [ 2, _a.sent() ];

             case 2:
              clip = this.clips[a];
              if (!("string" === typeof clip)) return [ 3, 4 ];
              return [ 4, UtilFunc_1.LoadRes(clip, cc.AudioClip) ];

             case 3:
              return [ 2, _a.sent() ];

             case 4:
              return [ 2, clip ];
            }
          });
        });
      };
      AudioMgr.prototype.playMusic = function(m) {
        return __awaiter(this, void 0, void 0, function() {
          var clip;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.setting.audio) return [ 2 ];
              if (!m && 0 !== m) return [ 2 ];
              if (m instanceof cc.AudioClip) {
                this.isMusicPlaying() && cc.audioEngine.stopMusic();
                cc.audioEngine.playMusic(m, true);
                return [ 2 ];
              }
              return [ 4, this.getClip(m) ];

             case 1:
              clip = _a.sent();
              if (clip) {
                this.music = m;
                this.isMusicPlaying() && cc.audioEngine.stopMusic();
                cc.audioEngine.playMusic(clip, true);
              }
              return [ 2 ];
            }
          });
        });
      };
      AudioMgr.prototype.isMusicPlaying = function() {
        return cc.audioEngine.isMusicPlaying();
      };
      AudioMgr.prototype.stopMusic = function() {
        this.music = void 0;
        cc.audioEngine.stopMusic();
      };
      AudioMgr.prototype.playSound = function(a, isPromise) {
        void 0 === isPromise && (isPromise = false);
        return __awaiter(this, void 0, Promise, function() {
          var id_1, clip, id_2;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.setting.audio) return [ 2 ];
              if (!a && 0 !== a) return [ 2 ];
              if (a instanceof cc.AudioClip) {
                id_1 = cc.audioEngine.playEffect(a, false);
                if (!isPromise) return [ 2 ];
                return [ 2, new Promise(function(resolve, reject) {
                  cc.audioEngine.setFinishCallback(id_1, resolve);
                }) ];
              }
              return [ 4, this.getClip(a) ];

             case 1:
              clip = _a.sent();
              if (clip) {
                id_2 = cc.audioEngine.playEffect(clip, false);
                if (!isPromise) return [ 2 ];
                return [ 2, new Promise(function(resolve, reject) {
                  cc.audioEngine.setFinishCallback(id_2, resolve);
                }) ];
              }
              return [ 2 ];
            }
          });
        });
      };
      AudioMgr.prototype.onSoundFinish = function(audioID, m, callback, target) {
        var callBack = function() {
          target ? callback.call(target, m, audioID) : callback(m, audioID);
        };
        cc.audioEngine.setFinishCallback(audioID, callBack);
      };
      AudioMgr.prototype.stopAllEffects = function() {
        cc.audioEngine.stopAllEffects();
        this.channels = {};
      };
      AudioMgr.prototype.playSoundLoop = function(a, channel) {
        return __awaiter(this, void 0, void 0, function() {
          var clip;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.setting.audio) return [ 2 ];
              if (!a && 0 !== a) return [ 2 ];
              if (!(a instanceof cc.AudioClip)) return [ 3, 1 ];
              clip = a;
              return [ 3, 3 ];

             case 1:
              return [ 4, this.getClip(a) ];

             case 2:
              clip = _a.sent();
              _a.label = 3;

             case 3:
              if (this.channels[channel]) {
                if (this.channels[channel].type === a && cc.audioEngine.getState(this.channels[channel].id) === cc.audioEngine.AudioState.PLAYING) return [ 2 ];
                if (clip) {
                  this.channels[channel].id = cc.audioEngine.playEffect(clip, true);
                  this.channels[channel].type = a;
                } else delete this.channels[channel];
                return [ 2 ];
              }
              if (!clip) return [ 2 ];
              this.channels[channel] = {
                id: cc.audioEngine.playEffect(clip, true),
                type: a
              };
              return [ 2 ];
            }
          });
        });
      };
      AudioMgr.prototype.stopSoundLoop = function(channel) {
        if (this.channels[channel]) {
          cc.audioEngine.stopEffect(this.channels[channel].id);
          delete this.channels[channel];
        }
      };
      AudioMgr.prototype.vibrateShort = function() {
        try {
          if (!this.setting.vibrate) return;
          switch (cc.sys.platform) {
           case cc.sys.MOBILE_BROWSER:
            "vibrate" in window.navigator && window.navigator.vibrate(15);
            break;

           case cc.sys.WECHAT_GAME:
            window["wx"].vibrateShort({});
            break;

           case cc.sys.OPPO_GAME:
           case cc.sys.VIVO_GAME:
            window["qg"].vibrateShort({});
            break;

           case cc.sys.EDITOR_PAGE:
          }
        } catch (error) {
          console.error(JSON.stringify(error));
        }
      };
      AudioMgr.prototype.vibrateLong = function() {
        try {
          if (!this.setting.vibrate) return;
          switch (cc.sys.platform) {
           case cc.sys.MOBILE_BROWSER:
            "vibrate" in window.navigator && window.navigator.vibrate(15);
            break;

           case cc.sys.WECHAT_GAME:
            window["wx"].vibrateLong({});
            break;

           case cc.sys.OPPO_GAME:
           case cc.sys.VIVO_GAME:
            window["qg"].vibrateLong({});
          }
        } catch (error) {
          console.error(JSON.stringify(error));
        }
      };
      return AudioMgr;
    }();
    exports.AudioMgr = AudioMgr;
    cc._RF.pop();
  }, {
    "./UtilFunc": "UtilFunc"
  } ],
  BaseLevel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18c30rAY29MzLIU00AgyMsS", "BaseLevel");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var KnifeCfg_1 = require("../cfg/KnifeCfg");
    var EventCenter_1 = require("../comm/EventCenter");
    var Enemy_1 = require("../node/Enemy");
    var Hero_1 = require("../node/Hero");
    var Knife_1 = require("../node/Knife");
    var UtilFunc_1 = require("../comm/UtilFunc");
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var Item_1 = require("../node/Item");
    var Shake_1 = require("../comm/Shake");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseLevel = function(_super) {
      __extends(BaseLevel, _super);
      function BaseLevel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.wallObj = [];
        _this.wallDoor = null;
        _this.wallDoorGuang = null;
        _this.hero = null;
        _this.enemyTab = [];
        _this.linearVelocity = cc.v2();
        _this.m_Camera = null;
        _this.heroLayer = null;
        _this.offset_position = cc.v2();
        return _this;
      }
      BaseLevel.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.AddHeroKnife, this.onAddHeroKnife, this);
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.CreateWildKnife, this.createWildKnife, this);
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.CreateQuickItem, this.createQuickItem, this);
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.OpenLevelDoor, this.onOpenLevelDoor, this);
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.ShakeScreen, this.onShakeScreen, this);
      };
      BaseLevel.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.AddHeroKnife, this.onAddHeroKnife, this);
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.CreateWildKnife, this.createWildKnife, this);
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.CreateQuickItem, this.createQuickItem, this);
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.OpenLevelDoor, this.onOpenLevelDoor, this);
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.ShakeScreen, this.onShakeScreen, this);
        GGlobal_1.default.data.GameSpeed = 1;
      };
      BaseLevel.prototype.onLoad = function() {
        GGlobal_1.default.data.initLevelData();
        GGlobal_1.default.data.state = GDefine_1.GameState.PLAY;
        GGlobal_1.default.data.GameSpeed = .01;
      };
      BaseLevel.prototype.start = function() {
        this.heroLayer = cc.find("Canvas/heroLayer", cc.director.getScene());
        this.createHero();
        this.createEnemys();
      };
      BaseLevel.prototype.createHero = function() {
        return __awaiter(this, void 0, void 0, function() {
          var fab, n;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.hero && this.hero.destroy();
              GGlobal_1.default.data.heroIsAlive = true;
              return [ 4, UtilFunc_1.LoadRes("prefab_node/heroNode", cc.Prefab) ];

             case 1:
              fab = _a.sent();
              n = cc.instantiate(fab);
              n.setParent(this.heroLayer);
              n.setPosition(0, -300);
              GGlobal_1.default.data.position = cc.v3(0, -300, 0);
              GGlobal_1.default.data.position_last = cc.v3(0, -300, 0);
              this.heroSrc = n.getComponent(Hero_1.default);
              this.heroSrc.init(this.heroTab);
              this.hero = n;
              return [ 2 ];
            }
          });
        });
      };
      BaseLevel.prototype.createEnemys = function() {
        return __awaiter(this, void 0, void 0, function() {
          var i, fab, n, enemysrc;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < this.enemyTab.length)) return [ 3, 4 ];
              return [ 4, UtilFunc_1.LoadRes("prefab_node/enemyNode", cc.Prefab) ];

             case 2:
              fab = _a.sent();
              n = cc.instantiate(fab);
              n.setParent(this.heroLayer);
              enemysrc = n.getComponent(Enemy_1.default);
              enemysrc.init(this.enemyTab[i]);
              GGlobal_1.default.data.enemyPool.push(n);
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      BaseLevel.prototype.createQuickItem = function(pos, toPos) {
        return __awaiter(this, void 0, void 0, function() {
          var fab, n, v3, randRota, itemsrc, radian, comVec, dirVec;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, UtilFunc_1.LoadRes("prefab_node/itemNode", cc.Prefab) ];

             case 1:
              fab = _a.sent();
              n = cc.instantiate(fab);
              v3 = pos || cc.v3(400 * Math.random() - 200, 600 * Math.random() - 300, 0);
              n.setParent(this.heroLayer);
              n.setPosition(v3);
              randRota = 360 * Math.random();
              n.setRotation(randRota);
              itemsrc = n.getComponent(Item_1.default);
              itemsrc.init();
              if (randRota) {
                radian = cc.misc.degreesToRadians(randRota);
                comVec = cc.v2(0, 1);
                dirVec = comVec.rotate(-radian);
                dirVec = dirVec.normalizeSelf().mul(400);
                n.getComponent(cc.RigidBody).linearVelocity = dirVec;
                n.getComponent(cc.RigidBody).angularVelocity = radian;
              }
              GGlobal_1.default.data.wild_knifePool.push(n);
              return [ 2 ];
            }
          });
        });
      };
      BaseLevel.prototype.createWildKnife = function(pos, toPos) {
        return __awaiter(this, void 0, void 0, function() {
          var fab, n, v3, randRota, knifesrc, radian, comVec, dirVec;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, UtilFunc_1.LoadRes("prefab_node/wildKnifeNode", cc.Prefab) ];

             case 1:
              fab = _a.sent();
              n = cc.instantiate(fab);
              v3 = pos || cc.v3(400 * Math.random() - 200, 600 * Math.random() - 300, 0);
              n.setParent(this.heroLayer);
              n.setPosition(v3);
              randRota = 360 * Math.random();
              n.setRotation(randRota);
              knifesrc = n.getComponent(Knife_1.default);
              knifesrc.init({
                level: this.heroTab.knifeProp.level,
                attackValue: this.heroTab.knifeProp.attackValue,
                picPath: this.heroTab.knifeProp.picPath,
                knifeCount: 0,
                shypeType: KnifeCfg_1.KnifeShypeType.NONE,
                isWild: true
              });
              if (randRota) {
                radian = cc.misc.degreesToRadians(randRota);
                comVec = cc.v2(0, 1);
                dirVec = comVec.rotate(-radian);
                dirVec = dirVec.normalizeSelf().mul(400);
                n.getComponent(cc.RigidBody).linearVelocity = dirVec;
              }
              GGlobal_1.default.data.wild_knifePool.push(n);
              return [ 2 ];
            }
          });
        });
      };
      BaseLevel.prototype.onAddHeroKnife = function() {
        this.heroTab.knifeProp.knifeCount += 1;
        if (GGlobal_1.default.data.HeroAreaNode) {
          var pyCC = GGlobal_1.default.data.HeroAreaNode.getComponent(cc.CircleCollider);
          pyCC.radius = GGlobal_1.default.cfg.world.getRadiusByCount(this.heroTab.knifeProp.knifeCount);
        }
        this.heroSrc.updateKnifes(this.heroTab);
      };
      BaseLevel.prototype.initLevel = function(levelData) {
        console.log("levelData = ", levelData);
        this.heroTab = levelData.heroTab;
        this.enemyTab = levelData.enemyTab;
      };
      BaseLevel.prototype.onTouchStart = function(event) {
        if (GGlobal_1.default.data.state == GDefine_1.GameState.NONE) return;
        EventCenter_1.EventCenter.emit(GDefine_1.GEvent.ChangeTipLayerActive, false);
        GGlobal_1.default.data.GameSpeed = 1;
      };
      BaseLevel.prototype.onTouchMove = function(event) {
        if (GGlobal_1.default.data.state == GDefine_1.GameState.NONE) return;
        var delta = event.getDelta();
        GGlobal_1.default.data.position_last = cc.v3(this.hero.x, this.hero.y, 0);
        GGlobal_1.default.data.offset_position.x += delta.x;
        GGlobal_1.default.data.offset_position.y += delta.y;
        GGlobal_1.default.data.position = cc.v3(this.hero.x, this.hero.y, 0);
      };
      BaseLevel.prototype.onTouchEnd = function(event) {
        if (GGlobal_1.default.data.state == GDefine_1.GameState.NONE) return;
        EventCenter_1.EventCenter.emit(GDefine_1.GEvent.ChangeTipLayerActive, true);
        GGlobal_1.default.data.GameSpeed = .01;
      };
      BaseLevel.prototype.onTouchCancel = function(event) {
        this.onTouchEnd(event);
      };
      BaseLevel.prototype.initCollider = function() {
        for (var _i = 0, _a = this.wallObj; _i < _a.length; _i++) {
          var nodeObj = _a[_i];
          if (!nodeObj) continue;
          for (var i = 0; i < nodeObj.childrenCount; i++) {
            var n = nodeObj.children[i];
            if (!n) continue;
            n.group = "wall";
            var nRB = n.addComponent(cc.RigidBody);
            var nPBC = n.addComponent(cc.PhysicsBoxCollider);
            nRB.type = cc.RigidBodyType.Static;
            nPBC.size = n.getContentSize();
            nPBC.offset = "wall1" == nodeObj.name && cc.v2(50, 0) || "wall2" == nodeObj.name && cc.v2(-50, 0) || "wall3" == nodeObj.name && cc.v2(0, 50) || "wall4" == nodeObj.name && cc.v2(0, -50) || cc.v2(0, 0);
            nPBC.apply();
          }
        }
      };
      BaseLevel.prototype.onOpenLevelDoor = function() {
        this.wallDoorGuang.active = true;
        this.wallDoor.active = false;
      };
      BaseLevel.prototype.onShakeScreen = function() {
        this.m_Camera || (this.m_Camera = cc.director.getScene().getComponentInChildren(cc.Camera));
        this.m_Camera.getComponent(Shake_1.default).shake = .2;
      };
      __decorate([ property({
        type: [ cc.Node ],
        tooltip: "\u5899\u4f53\u6839\u8282\u70b9"
      }) ], BaseLevel.prototype, "wallObj", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u95e8\u4f4d\u7f6e\u6839\u8282\u70b9"
      }) ], BaseLevel.prototype, "wallDoor", void 0);
      __decorate([ property({
        type: cc.Node,
        tooltip: "\u95e8\u5149\u6548"
      }) ], BaseLevel.prototype, "wallDoorGuang", void 0);
      BaseLevel = __decorate([ ccclass ], BaseLevel);
      return BaseLevel;
    }(cc.Component);
    exports.default = BaseLevel;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../cfg/KnifeCfg": "KnifeCfg",
    "../comm/EventCenter": "EventCenter",
    "../comm/Shake": "Shake",
    "../comm/UtilFunc": "UtilFunc",
    "../node/Enemy": "Enemy",
    "../node/Hero": "Hero",
    "../node/Item": "Item",
    "../node/Knife": "Knife"
  } ],
  CfgMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f376bzIBIhDma6s7uZkRPOK", "CfgMgr");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CfgMgr = void 0;
    var HeroCfg_1 = require("./cfg/HeroCfg");
    var KnifeCfg_1 = require("./cfg/KnifeCfg");
    var LevelCfg_1 = require("./cfg/LevelCfg");
    var WorldCfg_1 = require("./cfg/WorldCfg");
    var CfgMgr = function() {
      function CfgMgr() {
        this.world = new WorldCfg_1.WorldCfg();
        this.hero = new HeroCfg_1.HeroCfg();
        this.knife = new KnifeCfg_1.KnifeCfg();
        this.level = new LevelCfg_1.LevelCfg();
      }
      CfgMgr.prototype.read = function(onComplete) {
        onComplete();
      };
      return CfgMgr;
    }();
    exports.CfgMgr = CfgMgr;
    cc._RF.pop();
  }, {
    "./cfg/HeroCfg": "HeroCfg",
    "./cfg/KnifeCfg": "KnifeCfg",
    "./cfg/LevelCfg": "LevelCfg",
    "./cfg/WorldCfg": "WorldCfg"
  } ],
  DataWatcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5eebKtA81E2omeu0L1zJtt", "DataWatcher");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DataWatcher = exports.SubDataWatcher = exports.ObjectPathCB = void 0;
    var EventCenter_1 = require("./EventCenter");
    function ObjectPathCB(path, cb, str) {
      void 0 === str && (str = ".");
      var i = path.lastIndexOf(str);
      if (i < 0) {
        cb(str);
        return;
      }
      cb(path);
      ObjectPathCB(path.substring(0, i), cb, str);
    }
    exports.ObjectPathCB = ObjectPathCB;
    function GetData(obj, path) {
      var res = obj;
      var a = path.split(".");
      for (var i = 0, len = a.length; i < len; i++) {
        var element = a[i];
        if (!res) return;
        res = res[element];
      }
      return res;
    }
    function SetData(obj, path, value) {
      var res = obj;
      var a = path.split(".");
      for (var i = 0, len = a.length; i < len; i++) {
        var element = a[i];
        if (!element || 0 === element.length || "." === element) continue;
        i === len - 1 ? res[element] = value : res = res[element] || {};
      }
    }
    var SubDataWatcher = function(_super) {
      __extends(SubDataWatcher, _super);
      function SubDataWatcher() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SubDataWatcher.prototype.init = function(src, path) {
        if (src instanceof SubDataWatcher) {
          this.src = src.src;
          this.path = src.path + "." + path;
        } else {
          this.path = path;
          this.src = src;
        }
        var d = GetData(this.src.data, this.path);
        if ("object" !== typeof d) {
          console.log("SubWindowData", "\u6570\u636e\u9519\u8bef", src, path);
          return;
        }
        this.data = d;
        this.src.on(this.path, this.onSubChange, this);
      };
      SubDataWatcher.prototype.onSubChange = function(path, value) {
        var _this = this;
        var relativePath = path.substring(this.path.length);
        ObjectPathCB(relativePath, function(p) {
          _this.emit(p, relativePath, value);
        });
      };
      SubDataWatcher.prototype.release = function() {
        this.removeAll();
        this.src.off(this.path, this.onSubChange, this);
        this.src = void 0;
        this.data = void 0;
        this.path = void 0;
      };
      SubDataWatcher.prototype.getV = function(path) {
        return this.src.getV(this.path + "." + path);
      };
      SubDataWatcher.prototype.setV = function(path, v) {
        this.src.setV(this.path + "." + path, v);
      };
      SubDataWatcher.prototype.onChange = function(path) {
        this.src.onChange(this.path + "." + path);
      };
      return SubDataWatcher;
    }(EventCenter_1.EventDispatcher);
    exports.SubDataWatcher = SubDataWatcher;
    var DataWatcher = function(_super) {
      __extends(DataWatcher, _super);
      function DataWatcher() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DataWatcher.prototype.getV = function(path) {
        return GetData(this.data, path);
      };
      DataWatcher.prototype.setV = function(path, v) {
        SetData(this.data, path, v);
        this.emit(path, path, v);
      };
      DataWatcher.prototype.onChange = function(path) {
        this.emit(path, path, this.getV(path));
      };
      DataWatcher.prototype.release = function() {
        this.data = void 0;
        this.removeAll();
      };
      return DataWatcher;
    }(EventCenter_1.EventDispatcher);
    exports.DataWatcher = DataWatcher;
    cc._RF.pop();
  }, {
    "./EventCenter": "EventCenter"
  } ],
  Define: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfe35CJm+lFBqb2l9zHf5pf", "Define");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  Drag3dObj: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55c5eAlEGJBAp+llNBP0pvO", "Drag3dObj");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Drag3dObj = function(_super) {
      __extends(Drag3dObj, _super);
      function Drag3dObj() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.cam = null;
        _this.dis = 10;
        return _this;
      }
      Drag3dObj.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        if (this.cam.ortho) {
          var pos = cc.v3();
          this.target.getWorldPosition(pos);
          this.cam.getWorldToScreenPoint(pos, pos);
          this.dis = pos.z;
          console.log(this.dis);
          return;
        }
        var targetpos = cc.v3();
        this.target.getWorldPosition(targetpos);
        var camPos = cc.v3();
        this.cam.node.getWorldPosition(camPos);
        var camRot = cc.quat();
        this.cam.node.getWorldRotation(camRot);
        var f = cc.v3();
        cc.Vec3.transformQuat(f, cc.Vec3.FORWARD, camRot);
        this.dis = targetpos.sub(camPos).project(f).mag();
      };
      Drag3dObj.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
      };
      Drag3dObj.prototype.onTouchMove = function(event) {
        var epos = event.getLocation();
        if (this.cam.ortho) {
          var pos = cc.v3();
          this.target.getWorldPosition(pos);
          this.cam.getWorldToScreenPoint(pos, pos);
          pos.x = epos.x;
          pos.y = epos.y;
          this.cam.getScreenToWorldPoint(pos, pos);
          this.target.setWorldPosition(pos);
          return;
        }
        var size = cc.view.getVisibleSize();
        epos.x = epos.x - size.width / 2;
        epos.y = epos.y - size.height / 2;
        var camPos = cc.v3();
        this.cam.node.getWorldPosition(camPos);
        var camRot = cc.quat();
        this.cam.node.getWorldRotation(camRot);
        var f = cc.v3();
        cc.Vec3.transformQuat(f, cc.v3(0, 0, -1), camRot);
        var r = cc.v3();
        cc.Vec3.transformQuat(r, cc.Vec3.RIGHT, camRot);
        var u = cc.v3();
        cc.Vec3.transformQuat(u, cc.Vec3.UP, camRot);
        var h = this.dis * Math.tan(Math.PI / (180 / (this.cam.fov / this.cam.zoomRatio) * 2)) * 2;
        var w = h * size.width / size.height;
        var targetpos = camPos.add(f.mul(this.dis)).add(u.mul(epos.y / size.height * h)).add(r.mul(epos.x / size.width * w));
        this.target.setWorldPosition(targetpos);
      };
      __decorate([ property(cc.Node) ], Drag3dObj.prototype, "target", void 0);
      __decorate([ property(cc.Camera) ], Drag3dObj.prototype, "cam", void 0);
      Drag3dObj = __decorate([ ccclass ], Drag3dObj);
      return Drag3dObj;
    }(cc.Component);
    exports.default = Drag3dObj;
    cc._RF.pop();
  }, {} ],
  DragCam: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc1899TRipDe69jo4cicc4d", "DragCam");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DragCam = function(_super) {
      __extends(DragCam, _super);
      function DragCam() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.cam = null;
        _this.speed = 1;
        _this.rect = cc.rect();
        return _this;
      }
      DragCam.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
      };
      DragCam.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
      };
      DragCam.prototype.onTouchMove = function(event) {
        var delta = event.getDelta().mulSelf(-this.speed);
        delta.x += this.cam.node.position.x;
        delta.y += this.cam.node.position.y;
        delta.x < this.rect.x + cc.winSize.width / 2 / this.cam.zoomRatio ? delta.x = this.rect.x + cc.winSize.width / 2 / this.cam.zoomRatio : delta.x > this.rect.x + this.rect.width - cc.winSize.width / 2 / this.cam.zoomRatio && (delta.x = this.rect.x + this.rect.width - cc.winSize.width / 2 / this.cam.zoomRatio);
        delta.y < this.rect.y + cc.winSize.height / 2 / this.cam.zoomRatio ? delta.y = this.rect.y + cc.winSize.height / 2 / this.cam.zoomRatio : delta.y > this.rect.y + this.rect.height - cc.winSize.height / 2 / this.cam.zoomRatio && (delta.y = this.rect.y + this.rect.height - cc.winSize.height / 2 / this.cam.zoomRatio);
        this.cam.node.setPosition(delta);
      };
      __decorate([ property(cc.Camera) ], DragCam.prototype, "cam", void 0);
      __decorate([ property ], DragCam.prototype, "speed", void 0);
      __decorate([ property(cc.Rect) ], DragCam.prototype, "rect", void 0);
      DragCam = __decorate([ ccclass ], DragCam);
      return DragCam;
    }(cc.Component);
    exports.default = DragCam;
    cc._RF.pop();
  }, {} ],
  ECS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5e5005wcLpIV6wK8kbWJsKs", "ECS");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.System = exports.Component = exports.Entity = exports.World = void 0;
    var World = function() {
      function World() {
        this.frameCount = 0;
      }
      World.prototype.addEntity = function(entity) {};
      World.prototype.removeEntity = function(entity) {};
      World.prototype.getEntity = function(id) {
        return;
      };
      World.prototype.addSystem = function(sys) {};
      World.prototype.removeSystem = function(sys) {};
      World.prototype.getLerp = function() {
        return;
      };
      World.prototype.updateAddEntity = function() {};
      World.prototype.updateRemoveEntity = function() {};
      World.prototype.updateAddSystem = function() {};
      World.prototype.updateRemoveSystem = function() {};
      return World;
    }();
    exports.World = World;
    var Entity = function() {
      function Entity() {}
      Entity.prototype.dirty = function() {};
      Entity.prototype.remove = function() {};
      Entity.prototype.addComponent = function(entity) {
        return;
      };
      Entity.prototype.removeComponent = function(entity) {
        return;
      };
      Entity.prototype.removeComponentById = function(id) {
        return;
      };
      Entity.prototype.getComponent = function(comp) {
        return;
      };
      Entity.prototype.getComponentById = function(id) {
        return;
      };
      return Entity;
    }();
    exports.Entity = Entity;
    var Component = function() {
      function Component() {}
      Component.prototype.remove = function() {};
      Component.prototype.dirty = function() {};
      return Component;
    }();
    exports.Component = Component;
    var System = function() {
      function System() {
        this.order = 0;
      }
      System.prototype.onframeMove = function(world) {};
      System.prototype.onRender = function(world, lerp) {};
      return System;
    }();
    exports.System = System;
    cc._RF.pop();
  }, {} ],
  EffectMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "290040rPcdEq6QlRZE67b32", "EffectMgr");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EffectMgr = void 0;
    var EventCenter_1 = require("../comm/EventCenter");
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var EffectMgr = function() {
      function EffectMgr() {}
      EffectMgr.prototype.addListener = function() {
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.PlaySound, this.onPlaySound, this);
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.ShakePhone, this.onShake, this);
      };
      EffectMgr.prototype.removeListener = function() {
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.PlaySound, this.onPlaySound, this);
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.ShakePhone, this.onShake, this);
      };
      EffectMgr.prototype.onShake = function() {
        GGlobal_1.default.audio.vibrateLong();
      };
      EffectMgr.prototype.onPlaySound = function(a) {
        GGlobal_1.default.audio.playSound(GGlobal_1.default.asset.getAsset(a, cc.AudioClip));
      };
      return EffectMgr;
    }();
    exports.EffectMgr = EffectMgr;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter"
  } ],
  Enemy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e864aFmCrtHCaTJNJ123Bbp", "Enemy");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EnemyState = void 0;
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var EventCenter_1 = require("../comm/EventCenter");
    var Knife_1 = require("./Knife");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EnemyState;
    (function(EnemyState) {
      EnemyState[EnemyState["STAND"] = 0] = "STAND";
      EnemyState[EnemyState["MOVE_FIX"] = 1] = "MOVE_FIX";
      EnemyState[EnemyState["MOVE_FREE"] = 2] = "MOVE_FREE";
      EnemyState[EnemyState["MOVE_FLLOW"] = 3] = "MOVE_FLLOW";
    })(EnemyState = exports.EnemyState || (exports.EnemyState = {}));
    var Enemy = function(_super) {
      __extends(Enemy, _super);
      function Enemy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Hp = 0;
        _this.hpCount = null;
        _this.ps = null;
        _this.ps2 = null;
        _this.enemyState = EnemyState.STAND;
        _this.moveSpeedDir = cc.v2();
        _this.tt = 6;
        _this.speed = 0;
        _this.isDie = false;
        _this.nodeAni = null;
        _this.enemyIsDadForDebug = false;
        _this.lightCircleAni = null;
        _this.hurtAni = null;
        _this.sprite = null;
        _this.rank = [];
        _this.colorByRank = [];
        _this.scaleByRank = [];
        _this.dirTmp = [ 1, -1 ];
        _this.posIndex = 0;
        _this.posTmp = [ {
          x: -247,
          y: -568
        }, {
          x: 240,
          y: -568
        }, {
          x: 240,
          y: 410
        }, {
          x: -247,
          y: 410
        } ];
        _this.posDirTmp = [ {
          x: 0,
          y: -1
        }, {
          x: 1,
          y: 0
        }, {
          x: 0,
          y: 1
        }, {
          x: -1,
          y: 0
        } ];
        return _this;
      }
      Enemy.prototype.onEnable = function() {
        this.hpCount = cc.find("enemy/HP", this.node).getComponent(cc.Label);
        this.ps = cc.find("blood_ps", this.node).getComponent(cc.ParticleSystem);
        this.ps2 = cc.find("blood_ps_2", this.node).getComponent(cc.ParticleSystem);
        this.nodeAni = this.node.getChildByName("enemy").getComponent(cc.Animation);
        this.lightCircleAni = cc.find("lightCircle", this.node).getComponent(cc.Animation);
        this.hurtAni = cc.find("hurt_light", this.node).getComponent(cc.Animation);
        this.sprite = cc.find("enemy/icon", this.node).getComponent(cc.Sprite);
        this.nodeAni.on("stop", this.onAnimStop, this);
      };
      Enemy.prototype.start = function() {
        this.colorByRank && this.setEnemyColor(this.colorByRank[this.colorByRank.length - 1]);
        this.nodeAni.play("enemyIdle");
      };
      Enemy.prototype.blood = function() {
        var _this = this;
        this.ps.resetSystem();
        this.ps2.resetSystem();
        this.lightCircleAni.play();
        this.scheduleOnce(function() {
          _this.node.destroy();
        }, 1);
      };
      Enemy.prototype.hurt = function() {
        this.nodeAni.play("enemyHurt");
        this.hurtAni.play();
      };
      Enemy.prototype.die = function() {
        this.blood();
        this.isDie = true;
        this.node.group = "default";
        cc.find("enemy", this.node).opacity = 0;
        this.node.parent.removeComponent(cc.PhysicsCircleCollider);
        this.node.parent.removeComponent(cc.RigidBody);
      };
      Enemy.prototype.onAnimStop = function(type, state) {
        "enemyHurt" === state.name && this.nodeAni.play("enemyIdle");
      };
      Enemy.prototype.setEnemyColor = function(color) {
        this.sprite.node.color = color;
      };
      Enemy.prototype.chageImageByRank = function() {
        if (!this.rank) return;
        var curRank = this.getCurRank();
        this.setEnemyColor(this.colorByRank[curRank]);
        this.node.scale = this.scaleByRank[curRank];
      };
      Enemy.prototype.getCurRank = function() {
        for (var i = 0; i < this.rank.length; i++) if (this.Hp <= this.rank[i]) return i;
        return 0;
      };
      Enemy.prototype.init = function(data) {
        this.speed = GGlobal_1.default.cfg.world.enemy_move_speed;
        this.Hp = data.HP;
        this.node.position = cc.v3(data.pos_born);
        this.moveSpeedDir.x = 0;
        this.moveSpeedDir.y = -1;
        this.hpCount.string = this.Hp.toString();
        this.rank = data.Rank;
        this.colorByRank = data.colorByRank;
        this.scaleByRank = data.ScaleByRank;
        console.log("enemy data ", data);
      };
      Enemy.prototype.onCollisionEnter = function(other, self) {
        var _this = this;
        if (GGlobal_1.default.data.state == GDefine_1.GameState.NONE) return;
        if (this.isDie) return;
        if (this.enemyIsDadForDebug) return;
        if ("knife" === other.node.group) {
          this.chageImageByRank();
          var knifesrc = other.node.getComponent(Knife_1.default);
          this.Hp -= knifesrc && knifesrc.attackValue || -1;
          if (this.Hp <= 0) {
            this.die();
            GGlobal_1.default.data.enemyPool = GGlobal_1.default.data.enemyPool.filter(function(item) {
              return item !== _this.node;
            });
            GGlobal_1.default.data.killEnemyOfCurLevel += 1;
            EventCenter_1.EventCenter.emit(GDefine_1.GEvent.AddMoneyToGameLayer, this.node.position);
            EventCenter_1.EventCenter.emit(GDefine_1.GEvent.PlaySound, GDefine_1.AllAssets.music_\u51fb\u6740\u97f3\u6548);
            var rand = Math.random();
            rand < GGlobal_1.default.cfg.world.wildKnifeBornProbality && EventCenter_1.EventCenter.emit(GDefine_1.GEvent.CreateWildKnife, this.node.position);
            rand = Math.random();
            rand < GGlobal_1.default.cfg.world.quickItemBornProbality && EventCenter_1.EventCenter.emit(GDefine_1.GEvent.CreateQuickItem, this.node.position);
            return;
          }
          EventCenter_1.EventCenter.emit(GDefine_1.GEvent.ShakeScreen);
          EventCenter_1.EventCenter.emit(GDefine_1.GEvent.PlaySound, GDefine_1.AllAssets.music_\u653b\u51fb\u97f3\u6548);
          this.hurt();
          this.hpCount.string = GGlobal_1.default.data.getHpValueString(this.Hp).toString();
        } else "wall" === other.node.group && console.log("enemy wall");
      };
      Enemy.prototype.onBeginContact = function(contact, selfCollider, otherConllider) {
        this.tt = GGlobal_1.default.cfg.world.enemy_change_state_time;
      };
      Enemy.prototype.changeState = function(distance) {
        if (this.enemyState == EnemyState.MOVE_FIX) return;
        distance < GGlobal_1.default.cfg.world.enemy_find_distance ? this.enemyState = EnemyState.MOVE_FLLOW : this.enemyState = EnemyState.MOVE_FREE;
      };
      Enemy.prototype.checkFixDir = function() {
        if (0 !== this.posDirTmp[this.posIndex].x) return this.posDirTmp[this.posIndex].x > 0 ? this.node.position.x >= this.posTmp[this.posIndex].x : this.node.position.x <= this.posTmp[this.posIndex].x;
        if (0 !== this.posDirTmp[this.posIndex].y) return this.posDirTmp[this.posIndex].y > 0 ? this.node.position.y >= this.posTmp[this.posIndex].y : this.node.position.y <= this.posTmp[this.posIndex].y;
        return false;
      };
      Enemy.prototype.update = function(dt) {
        if (GGlobal_1.default.data.state == GDefine_1.GameState.NONE) return;
        if (!GGlobal_1.default.data.position) return;
        if (this.isDie) return;
        var pos_enemy = this.node.position;
        var pos_hero = GGlobal_1.default.data.position;
        var distance = cc.Vec2.distance(pos_enemy, pos_hero);
        this.tt += dt * GGlobal_1.default.data.GameSpeed;
        if (this.tt < GGlobal_1.default.cfg.world.enemy_change_state_time) {
          this.node.x += this.moveSpeedDir.x * dt * GGlobal_1.default.data.GameSpeed;
          this.node.y += this.moveSpeedDir.y * dt * GGlobal_1.default.data.GameSpeed;
          var comVec = cc.v2(0, 1);
          var radian = this.moveSpeedDir.signAngle(comVec);
          var degree = cc.misc.radiansToDegrees(radian);
          this.node.angle = (180 - degree) % 360;
          if (this.enemyState == EnemyState.MOVE_FIX && this.checkFixDir()) {
            this.posIndex++;
            this.posIndex %= 4;
            this.moveSpeedDir = cc.v2(0, 0);
            this.tt = GGlobal_1.default.cfg.world.enemy_change_state_time;
          }
        } else {
          this.changeState(distance);
          switch (this.enemyState) {
           case EnemyState.STAND:
            break;

           case EnemyState.MOVE_FREE:
            this.moveSpeedDir.x = this.speed * this.dirTmp[Math.floor(Math.random() * this.dirTmp.length)];
            this.moveSpeedDir.y = this.speed * this.dirTmp[Math.floor(Math.random() * this.dirTmp.length)];
            break;

           case EnemyState.MOVE_FIX:
            this.moveSpeedDir.x = this.speed * this.posDirTmp[this.posIndex].x;
            this.moveSpeedDir.y = this.speed * this.posDirTmp[this.posIndex].y;
            break;

           case EnemyState.MOVE_FLLOW:
            var delta = cc.v2();
            delta.x = pos_hero.x - pos_enemy.x;
            delta.y = pos_hero.y - pos_enemy.y;
            delta = delta.normalizeSelf().mul(this.speed);
            this.moveSpeedDir.x = delta.x;
            this.moveSpeedDir.y = delta.y;
          }
          this.tt = 0;
        }
      };
      Enemy = __decorate([ ccclass ], Enemy);
      return Enemy;
    }(cc.Component);
    exports.default = Enemy;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter",
    "./Knife": "Knife"
  } ],
  EnergyTime: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2effV7ObNI0Z2QpU4yf1hZ", "EnergyTime");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("../comm/EventCenter");
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EnergyTime = function(_super) {
      __extends(EnergyTime, _super);
      function EnergyTime() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.tt = 1;
        return _this;
      }
      EnergyTime.prototype.onLoad = function() {};
      EnergyTime.prototype.start = function() {
        this.label = this.node.getComponent(cc.Label);
        this.checkIsAddEnergy();
      };
      EnergyTime.prototype.checkIsAddEnergy = function() {
        var date = new Date();
        if (!GGlobal_1.default.player.lastGetEnergyTime || GGlobal_1.default.player.energy >= GGlobal_1.default.cfg.world.maxEnergyCount) {
          GGlobal_1.default.player.lastGetEnergyTime = date.getTime();
          GGlobal_1.default.player.write();
          return;
        }
        var lastTime = GGlobal_1.default.player.lastGetEnergyTime;
        var curTime = date.getTime();
        var timeOffset = (curTime - lastTime) / 1e3;
        var addEnergyTimes = Math.floor(timeOffset / GGlobal_1.default.cfg.world.addOneEnergyNeedTime);
        if (addEnergyTimes + GGlobal_1.default.player.energy >= GGlobal_1.default.cfg.world.maxEnergyCount) {
          GGlobal_1.default.player.energy = GGlobal_1.default.cfg.world.maxEnergyCount;
          GGlobal_1.default.player.lastGetEnergyTime = date.getTime();
        } else if (addEnergyTimes) {
          GGlobal_1.default.player.energy += addEnergyTimes;
          GGlobal_1.default.player.lastGetEnergyTime = date.getTime() - 1e3 * (timeOffset - addEnergyTimes * GGlobal_1.default.cfg.world.addOneEnergyNeedTime);
        }
        EventCenter_1.EventCenter.emit(GDefine_1.GEvent.UpdateLobbyEnergyCount);
      };
      EnergyTime.prototype.update = function(dt) {
        this.tt += dt;
        if (this.tt >= 1) {
          this.tt -= 1;
          if (GGlobal_1.default.player.energy >= GGlobal_1.default.cfg.world.maxEnergyCount) {
            this.node.opacity = 0;
            return;
          }
          this.node.opacity = 255;
          var curTime = new Date().getTime();
          var timeOffset = Math.floor((curTime - GGlobal_1.default.player.lastGetEnergyTime) / 1e3);
          if (timeOffset >= GGlobal_1.default.cfg.world.addOneEnergyNeedTime) {
            GGlobal_1.default.player.lastGetEnergyTime = curTime;
            GGlobal_1.default.player.energy++;
            EventCenter_1.EventCenter.emit(GDefine_1.GEvent.UpdateLobbyEnergyCount);
          }
          this.label.string = this.GetTimeLeft2BySecond(GGlobal_1.default.cfg.world.addOneEnergyNeedTime - timeOffset) + "+1";
        }
      };
      EnergyTime.prototype.GetTimeLeft2BySecond = function(s) {
        var hours = Math.round((s - 1800) / 3600);
        var minutes = Math.round((s - 30) / 60) % 60;
        var seconds = s % 60;
        return (hours > 0 ? this.PrefixInteger(hours, 2) + ":" : "") + this.PrefixInteger(minutes, 2) + ":" + this.PrefixInteger(seconds, 2);
      };
      EnergyTime.prototype.PrefixInteger = function(num, length) {
        return (Array(length).join("0") + num).slice(-length);
      };
      EnergyTime = __decorate([ ccclass ], EnergyTime);
      return EnergyTime;
    }(cc.Component);
    exports.default = EnergyTime;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter"
  } ],
  EnergyUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b7deLJdjJLKKtmUsooHLKF", "EnergyUI");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("../comm/EventCenter");
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EnergyUI = function(_super) {
      __extends(EnergyUI, _super);
      function EnergyUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.close = null;
        _this.addEnergyBtn = null;
        return _this;
      }
      EnergyUI.prototype.onLoad = function() {
        this.updateEnergy();
        cc.find("addEnergyBtn/guangxiao", this.node).getComponent(cc.Animation).play();
      };
      EnergyUI.prototype.onClose = function() {
        this.node.active = false;
      };
      EnergyUI.prototype.updateEnergy = function() {
        cc.find("addEnergyCount", this.node).getComponent(cc.Label).string = GGlobal_1.default.cfg.world.addEnergyCount.toString();
      };
      EnergyUI.prototype.onAddEnergyClick = function() {
        GGlobal_1.default.player.energy += GGlobal_1.default.cfg.world.addEnergyCount;
        EventCenter_1.EventCenter.emit(GDefine_1.GEvent.UpdateLobbyEnergyCount);
        GGlobal_1.default.player.write();
        this.onClose();
      };
      __decorate([ property(cc.Node) ], EnergyUI.prototype, "close", void 0);
      __decorate([ property(cc.Node) ], EnergyUI.prototype, "addEnergyBtn", void 0);
      EnergyUI = __decorate([ ccclass ], EnergyUI);
      return EnergyUI;
    }(cc.Component);
    exports.default = EnergyUI;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter"
  } ],
  EventCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55509Q/LPlCtqMLgWJX6YVs", "EventCenter");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EventDispatcherBase = exports.EventCenter = exports.EventDispatcher = exports.Event = void 0;
    var EventDispatcher = function() {
      function EventDispatcher(target) {
        this.listenerMap = new Map();
        this._target = target;
      }
      EventDispatcher.prototype.dispatchEvent = function(event) {
        var _this = this;
        if (!event.type) return;
        if (!this.hasEventListener(event.type)) return;
        event.target || (this._target ? event.target = this : event.target = this._target);
        var l = this.listenerMap.get(event.type);
        if (!l) return;
        var listenerList = l.concat();
        var type = event.type;
        listenerList.forEach(function(listener) {
          var fn = listener.fn, thisObj = listener.thisObj;
          listener.once && _this.removeEventListener(type, fn, thisObj);
          thisObj ? fn.call.apply(fn, __spreadArrays([ thisObj ], event.data)) : fn.call.apply(fn, __spreadArrays([ _this ], event.data));
        });
        Event.release(event);
      };
      EventDispatcher.prototype.dispatchEventWith = function(type, data) {
        this.dispatchEvent(Event.create(type, data));
      };
      EventDispatcher.prototype.emit = function(type) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) data[_i - 1] = arguments[_i];
        this.dispatchEventWith(type, data);
      };
      EventDispatcher.prototype.addEventListener = function(type, listener, thisObj, priority) {
        void 0 === priority && (priority = 0);
        this._addEventListener(type, listener, thisObj, priority);
      };
      EventDispatcher.prototype.on = function(type, listener, thisObj, priority) {
        void 0 === priority && (priority = 0);
        this.addEventListener(type, listener, thisObj, priority);
      };
      EventDispatcher.prototype.once = function(type, listener, thisObj, priority) {
        void 0 === priority && (priority = 0);
        this._addEventListener(type, listener, thisObj, priority, true);
      };
      EventDispatcher.prototype._addEventListener = function(type, listener, thisObj, priority, once) {
        void 0 === priority && (priority = 0);
        void 0 === once && (once = false);
        if ("function" !== typeof listener) throw new Error("\u6307\u5b9a\u7684 listener \u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\u3002");
        this.hasEventListener(type) || this.listenerMap.set(type, []);
        var listeners = this.listenerMap.get(type);
        if (!listeners) return;
        for (var i = 0; i < listeners.length; i++) if (listeners[i].fn === listener && listeners[i].thisObj === thisObj) {
          console.log("EventCenter:\u5df2\u7ecf\u6ce8\u518c\u8fc7\u4e86", type, listener);
          if (listeners[i].priority !== priority) {
            listeners[i].priority = priority;
            listeners.sort(function(a, b) {
              return b.priority - a.priority;
            });
          }
          return;
        }
        listeners.push(new Listener(listener, thisObj, priority, once));
        listeners.sort(function(a, b) {
          return b.priority - a.priority;
        });
      };
      EventDispatcher.prototype.removeEventListener = function(type, listener, thisObj) {
        if (!this.hasEventListener(type)) return;
        var listeners = this.listenerMap.get(type);
        if (!listeners) return;
        for (var i = listeners.length - 1; i >= 0; i--) listeners[i].fn !== listener || thisObj && listeners[i].thisObj !== thisObj || listeners.splice(i, 1);
        0 === listeners.length && this.listenerMap.delete(type);
      };
      EventDispatcher.prototype.removeTargetEventListener = function(type, target) {
        if (!this.hasEventListener(type)) return;
        var listeners = this.listenerMap.get(type);
        if (!listeners) return;
        for (var i = listeners.length - 1; i >= 0; i--) if (listeners[i].thisObj === target) {
          listeners.splice(i, 1);
          break;
        }
        0 === listeners.length && this.listenerMap.delete(type);
      };
      EventDispatcher.prototype.removeTargetAllEventListener = function(target) {
        var rmMap = [];
        for (var _i = 0, _a = this.listenerMap.keys(); _i < _a.length; _i++) {
          var key = _a[_i];
          var listeners = this.listenerMap.get(key);
          if (!listeners) continue;
          for (var i = listeners.length - 1; i >= 0; i--) if (listeners[i].thisObj === target) {
            listeners.splice(i, 1);
            break;
          }
          0 === listeners.length && rmMap.push(key);
        }
        for (var _b = 0, rmMap_1 = rmMap; _b < rmMap_1.length; _b++) {
          var iterator = rmMap_1[_b];
          this.listenerMap.delete(iterator);
        }
      };
      EventDispatcher.prototype.removeAllEventListener = function(type) {
        if (!this.hasEventListener(type)) return;
        this.listenerMap.delete(type);
      };
      EventDispatcher.prototype.removeAll = function() {
        this.listenerMap.clear();
      };
      EventDispatcher.prototype.hasEventListener = function(type) {
        return this.listenerMap.has(type);
      };
      EventDispatcher.prototype.off = function(type, listener, thisObj) {
        this.removeEventListener(type, listener, thisObj);
      };
      EventDispatcher.prototype.offAll = function(type, target) {
        target ? this.removeTargetEventListener(type, target) : this.removeAllEventListener(type);
      };
      EventDispatcher.prototype.offTarget = function(target) {
        this.removeTargetAllEventListener(target);
      };
      return EventDispatcher;
    }();
    exports.EventDispatcher = EventDispatcher;
    var Listener = function() {
      function Listener(fn, thisObj, priority, once) {
        void 0 === priority && (priority = 0);
        void 0 === once && (once = false);
        this.fn = fn;
        this.thisObj = thisObj;
        this.priority = priority;
        this.once = once;
      }
      return Listener;
    }();
    var eventPool = [];
    var Event = function() {
      function Event(type, data) {
        this.type = type;
        this.data = data;
        this.target = void 0;
      }
      Event.prototype.clone = function() {
        if (!this.type) return;
        return Event.create(this.type, this.data);
      };
      Event.prototype.toString = function() {
        return this.constructor.name + "(type=" + (this.type && this.type.toString()) + ", data=" + this.data + ")";
      };
      Event.create = function(type, data) {
        for (var i = 0; i < eventPool.length; i++) if (eventPool[i] instanceof Event) {
          var evt = eventPool[i];
          evt.type = type;
          evt.data = data;
          evt.target = void 0;
          eventPool.splice(i, 1);
          return evt;
        }
        return new Event(type, data);
      };
      Event.release = function(event) {
        if (eventPool.length >= 50) return;
        event.data = void 0;
        event.target = void 0;
        event.type = void 0;
        eventPool.push(event);
      };
      return Event;
    }();
    exports.Event = Event;
    Event.ADDED = Symbol("ADDED");
    Event.CHANGE = Symbol("CHANGE");
    Event.CLOSE = Symbol("CLOSE");
    Event.CLOSING = Symbol("CLOSING");
    Event.CANCEL = Symbol("CANCEL");
    Event.CLEAR = Symbol("CLEAR");
    Event.COMPLETE = Symbol("COMPLETE");
    Event.CONNECT = Symbol("CONNECT");
    Event.OPEN = Symbol("OPEN");
    Event.SELECT = Symbol("SELECT");
    Event.SELECT_ALL = Symbol("SELECT_ALL");
    var $singleton = Symbol("singleton");
    var EventCenter = function(_super) {
      __extends(EventCenter, _super);
      function EventCenter(symbol) {
        var _this = this;
        if (symbol !== $singleton) throw new Error("\u4e0d\u80fd\u5b9e\u4f8b\u5316 EventCenter \u7c7b\uff0c\u56e0\u4e3a EventCenter \u662f\u5355\u4f8b\u6a21\u5f0f\uff0c\u8bf7\u4f7f\u5b83\u7684\u9759\u6001\u65b9\u6cd5\u3002");
        _this = _super.call(this) || this;
        return _this;
      }
      Object.defineProperty(EventCenter, "getInstance", {
        get: function() {
          void 0 === EventCenter.instance && (EventCenter.instance = new EventCenter($singleton));
          return EventCenter.instance;
        },
        enumerable: false,
        configurable: true
      });
      EventCenter.on = function(type, listener, thisObj, priority) {
        void 0 === priority && (priority = 0);
        EventCenter.getInstance.addEventListener(type, listener, thisObj, priority);
      };
      EventCenter.once = function(type, listener, thisObj, priority) {
        void 0 === priority && (priority = 0);
        EventCenter.getInstance.once(type, listener, thisObj, priority);
      };
      EventCenter.off = function(type, listener, thisObj) {
        EventCenter.getInstance.removeEventListener(type, listener, thisObj);
      };
      EventCenter.offAll = function(type, target) {
        target ? EventCenter.getInstance.removeTargetEventListener(type, target) : EventCenter.getInstance.removeAllEventListener(type);
      };
      EventCenter.offTarget = function(target) {
        EventCenter.getInstance.removeTargetAllEventListener(target);
      };
      EventCenter.send = function(event, target) {
        target && (event.target = target);
        EventCenter.getInstance.dispatchEvent(event);
      };
      EventCenter.emit = function(type) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) data[_i - 1] = arguments[_i];
        EventCenter.send(Event.create(type, data));
      };
      return EventCenter;
    }(EventDispatcher);
    exports.EventCenter = EventCenter;
    var EventDispatcherBase = function() {
      function EventDispatcherBase() {
        this.eventDispatcher = new EventDispatcher(this);
      }
      EventDispatcherBase.prototype.on = function(type, listener, thisObj, priority) {
        this.eventDispatcher.addEventListener(type, listener, thisObj, priority);
      };
      EventDispatcherBase.prototype.once = function(type, listener, thisObj, priority) {
        this.eventDispatcher.once(type, listener, thisObj, priority);
      };
      EventDispatcherBase.prototype.off = function(type, listener, thisObj) {
        this.eventDispatcher.removeEventListener(type, listener, thisObj);
      };
      EventDispatcherBase.prototype.offAll = function(type, target) {
        target ? this.eventDispatcher.removeTargetEventListener(type, target) : this.eventDispatcher.removeAllEventListener(type);
      };
      EventDispatcherBase.prototype.offTarget = function(target) {
        this.eventDispatcher.removeTargetAllEventListener(target);
      };
      EventDispatcherBase.prototype.releaseEventDispatcher = function() {
        this.eventDispatcher.removeAll();
      };
      EventDispatcherBase.prototype.emitEvent = function(type) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) data[_i - 1] = arguments[_i];
        this.eventDispatcher.dispatchEvent(Event.create(type, data));
      };
      return EventDispatcherBase;
    }();
    exports.EventDispatcherBase = EventDispatcherBase;
    cc._RF.pop();
  }, {} ],
  GAsset: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "780c6DTJjJA34Fp8em8I25f", "GAsset");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GAsset = void 0;
    var AssetMgr_1 = require("./comm/AssetMgr");
    var GDefine_1 = require("./GDefine");
    var GAsset = function(_super) {
      __extends(GAsset, _super);
      function GAsset() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GAsset.prototype.key2bd = function(key) {
        return GDefine_1.asset2bd(key);
      };
      GAsset.prototype.lobbyPreload = function() {
        this.preload(GDefine_1.AllAssets.music_\u5347\u7ea7);
      };
      GAsset.prototype.readyPreload = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.preload(GDefine_1.AllAssets.music_\u5347\u7ea7);
            return [ 2 ];
          });
        });
      };
      GAsset.prototype.gamePreload = function() {
        this.preload(GDefine_1.AllAssets.level_1);
        this.preload(GDefine_1.AllAssets.level_2);
      };
      return GAsset;
    }(AssetMgr_1.AssetMgr);
    exports.GAsset = GAsset;
    cc._RF.pop();
  }, {
    "./GDefine": "GDefine",
    "./comm/AssetMgr": "AssetMgr"
  } ],
  GData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b229mbgUZK05St5coJJCbI", "GData");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GData = void 0;
    var GData = function() {
      function GData() {
        this.unissuedMoney = 0;
        this.GameSpeed = 1;
      }
      GData.prototype.initLevelData = function() {
        this.moneyOfCurLevel = 0;
        this.moneyOfCurLevelForAction = 0;
        this.killEnemyOfCurLevel = 0;
        this.quickSpeedLastTime = 0;
        this.GameSpeed = 1;
        this.moneyOfCurLevel = 0;
        this.HeroAreaNode = null;
        this.position = null;
        this.position_last = null;
        this.heroIsAlive = null;
        this.enemyPool = [];
        this.Hero_knifePool_1 = [];
        this.Hero_knifePool_2 = [];
        this.wild_knifePool = [];
        this.wild_ItemPool = [];
        this.offset_position = cc.v3();
      };
      GData.prototype.getHpValueString = function(count) {
        var symbol = [ "K", "M" ];
        if (count / 1e3 < 1) return count;
        if (count / 1e6 < 1) {
          var decNum = count / 1e3;
          return decNum.toPrecision(3).toString() + symbol[0];
        }
        if (count / 1e6 < 1) {
          var decNum = count / 1e6;
          return decNum.toPrecision(3).toString() + symbol[1];
        }
        return count;
      };
      return GData;
    }();
    exports.GData = GData;
    cc._RF.pop();
  }, {} ],
  GDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1026eOt/wZLx6Fvis5yAJZ6", "GDefine");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.asset2bd = exports.Window2Node = exports.GBundle = exports.AllBundle = exports.AllAssets = exports.GScene = exports.GUIState = exports.GWindow = exports.GameState = exports.GEvent = void 0;
    var GEvent;
    (function(GEvent) {
      GEvent["onCartoonClosed"] = "onCartoonClosed";
      GEvent["UICtrl"] = "UICtrl";
      GEvent["ClickStartGame"] = "ClickStartGame";
      GEvent["AddHeroKnife"] = "AddHeroKnife";
      GEvent["CreateWildKnife"] = "CreateWildKnife";
      GEvent["ChangeTipLayerActive"] = "ChangeTipLayerActive";
      GEvent["AddMoneyToGameLayer"] = "AddMoneyToGameLayer";
      GEvent["EatQuickSpeedItem"] = "EatQuickSpeedItem";
      GEvent["UpdateLobbyMoneyCount"] = "UpdateLobbyMoneyCount";
      GEvent["UpdateLobbyEnergyCount"] = "UpdateLobbyEnergyCount";
      GEvent["CreateQuickItem"] = "CreateQuickItem";
      GEvent["OpenLevelDoor"] = "OpenLevelDoor";
      GEvent["PlaySound"] = "PlaySound";
      GEvent["ShakePhone"] = "ShakePhone";
      GEvent["ShakeScreen"] = "ShakeScreen";
    })(GEvent = exports.GEvent || (exports.GEvent = {}));
    var GameState;
    (function(GameState) {
      GameState[GameState["NONE"] = 0] = "NONE";
      GameState[GameState["PLAY"] = 1] = "PLAY";
      GameState[GameState["PAUSE"] = 2] = "PAUSE";
      GameState[GameState["GAMEOVER"] = 3] = "GAMEOVER";
    })(GameState = exports.GameState || (exports.GameState = {}));
    var GWindow;
    (function(GWindow) {
      GWindow[GWindow["tip"] = 0] = "tip";
      GWindow[GWindow["ready"] = 1] = "ready";
      GWindow[GWindow["level_1"] = 2] = "level_1";
      GWindow[GWindow["level_2"] = 3] = "level_2";
    })(GWindow = exports.GWindow || (exports.GWindow = {}));
    var GUIState;
    (function(GUIState) {
      GUIState[GUIState["openBack"] = 0] = "openBack";
      GUIState[GUIState["open"] = 1] = "open";
      GUIState[GUIState["openTop"] = 2] = "openTop";
      GUIState[GUIState["close"] = 3] = "close";
    })(GUIState = exports.GUIState || (exports.GUIState = {}));
    var GScene;
    (function(GScene) {
      GScene["start"] = "start";
      GScene["lobby"] = "lobby";
      GScene["game"] = "game";
    })(GScene = exports.GScene || (exports.GScene = {}));
    var AllAssets;
    (function(AllAssets) {
      AllAssets[AllAssets["none"] = 0] = "none";
      AllAssets[AllAssets["level_1"] = 1] = "level_1";
      AllAssets[AllAssets["level_2"] = 2] = "level_2";
      AllAssets[AllAssets["level_3"] = 3] = "level_3";
      AllAssets[AllAssets["loadingTipUI"] = 4] = "loadingTipUI";
      AllAssets[AllAssets["tipUI"] = 5] = "tipUI";
      AllAssets[AllAssets["shopingUI"] = 6] = "shopingUI";
      AllAssets[AllAssets["hero1"] = 7] = "hero1";
      AllAssets[AllAssets["enemy"] = 8] = "enemy";
      AllAssets[AllAssets["level_di_1"] = 9] = "level_di_1";
      AllAssets[AllAssets["level_di_2"] = 10] = "level_di_2";
      AllAssets[AllAssets["enemy_icon_0"] = 11] = "enemy_icon_0";
      AllAssets[AllAssets["enemy_icon_1"] = 12] = "enemy_icon_1";
      AllAssets[AllAssets["enemy_icon_2"] = 13] = "enemy_icon_2";
      AllAssets[AllAssets["music_\u5927\u5385\u80cc\u666f\u97f3\u6548"] = 14] = "music_\u5927\u5385\u80cc\u666f\u97f3\u6548";
      AllAssets[AllAssets["music_\u5173\u5361\u80cc\u666f\u97f3\u6548"] = 15] = "music_\u5173\u5361\u80cc\u666f\u97f3\u6548";
      AllAssets[AllAssets["music_\u5347\u7ea7"] = 16] = "music_\u5347\u7ea7";
      AllAssets[AllAssets["music_\u5207\u6362\u6b66\u5668\u82f1\u96c4"] = 17] = "music_\u5207\u6362\u6b66\u5668\u82f1\u96c4";
      AllAssets[AllAssets["music_\u8fdb\u5165\u5173\u5361"] = 18] = "music_\u8fdb\u5165\u5173\u5361";
      AllAssets[AllAssets["music_\u8fdb\u5165\u5173\u5361\u97f3\u6548"] = 19] = "music_\u8fdb\u5165\u5173\u5361\u97f3\u6548";
      AllAssets[AllAssets["music_\u653b\u51fb\u97f3\u6548"] = 20] = "music_\u653b\u51fb\u97f3\u6548";
      AllAssets[AllAssets["music_\u51fb\u6740\u97f3\u6548"] = 21] = "music_\u51fb\u6740\u97f3\u6548";
      AllAssets[AllAssets["music_\u62fe\u53d6\u98de\u5200\u97f3\u6548"] = 22] = "music_\u62fe\u53d6\u98de\u5200\u97f3\u6548";
      AllAssets[AllAssets["music_\u66b4\u8d70\u97f3\u6548"] = 23] = "music_\u66b4\u8d70\u97f3\u6548";
      AllAssets[AllAssets["music_\u5173\u5e95\u97f3\u6548"] = 24] = "music_\u5173\u5e95\u97f3\u6548";
      AllAssets[AllAssets["music_\u5173\u5e95\u8b66\u544a\u97f3\u6548"] = 25] = "music_\u5173\u5e95\u8b66\u544a\u97f3\u6548";
      AllAssets[AllAssets["music_\u5931\u8d25\u63d0\u793a\u97f3"] = 26] = "music_\u5931\u8d25\u63d0\u793a\u97f3";
      AllAssets[AllAssets["music_\u80dc\u5229\u63d0\u793a\u97f3"] = 27] = "music_\u80dc\u5229\u63d0\u793a\u97f3";
      AllAssets[AllAssets["music_\u5899\u4f53\u7834\u88c2\u97f3\u6548"] = 28] = "music_\u5899\u4f53\u7834\u88c2\u97f3\u6548";
      AllAssets[AllAssets["music_\u7cfb\u7edf\u81ea\u52a8\u5207\u6362\u4e0b\u4e00\u5173"] = 29] = "music_\u7cfb\u7edf\u81ea\u52a8\u5207\u6362\u4e0b\u4e00\u5173";
      AllAssets[AllAssets["music_\u7ed3\u7b97\u91d1\u5e01\u97f3\u6548"] = 30] = "music_\u7ed3\u7b97\u91d1\u5e01\u97f3\u6548";
      AllAssets[AllAssets["music_\u989d\u5916\u52a0\u91d1\u5e01\u97f3\u6548"] = 31] = "music_\u989d\u5916\u52a0\u91d1\u5e01\u97f3\u6548";
      AllAssets[AllAssets["music_\u91d1\u5e01\u8fdb\u5165\u91d1\u5e01\u4f59\u989d\u97f3\u6548"] = 32] = "music_\u91d1\u5e01\u8fdb\u5165\u91d1\u5e01\u4f59\u989d\u97f3\u6548";
      AllAssets[AllAssets["music_\u5173\u5361\u83b7\u5f97\u65b0\u82f1\u96c4\u63d0\u793a\u97f3\u6548"] = 33] = "music_\u5173\u5361\u83b7\u5f97\u65b0\u82f1\u96c4\u63d0\u793a\u97f3\u6548";
      AllAssets[AllAssets["music_\u5347\u7ea7\u97f3\u6548"] = 34] = "music_\u5347\u7ea7\u97f3\u6548";
      AllAssets[AllAssets["music_\u70b9\u51fb\u82f1\u96c41\u97f3\u6548"] = 35] = "music_\u70b9\u51fb\u82f1\u96c41\u97f3\u6548";
      AllAssets[AllAssets["music_\u70b9\u51fb\u82f1\u96c42\u97f3\u6548"] = 36] = "music_\u70b9\u51fb\u82f1\u96c42\u97f3\u6548";
      AllAssets[AllAssets["music_\u70b9\u51fb\u82f1\u96c43\u97f3\u6548"] = 37] = "music_\u70b9\u51fb\u82f1\u96c43\u97f3\u6548";
      AllAssets[AllAssets["music_\u7b2c\u4e94\u4e2aboss\u51fa\u573a\u97f3\u6548"] = 38] = "music_\u7b2c\u4e94\u4e2aboss\u51fa\u573a\u97f3\u6548";
      AllAssets[AllAssets["music_\u7b2c\u4e94\u5173boss\u6b7b\u4ea1\u97f3\u6548"] = 39] = "music_\u7b2c\u4e94\u5173boss\u6b7b\u4ea1\u97f3\u6548";
      AllAssets[AllAssets["music_\u7b2c\u5341\u5173\u7b2c\u4e8c\u5341\u5173boss\u767b\u573a\u97f3\u6548"] = 40] = "music_\u7b2c\u5341\u5173\u7b2c\u4e8c\u5341\u5173boss\u767b\u573a\u97f3\u6548";
    })(AllAssets = exports.AllAssets || (exports.AllAssets = {}));
    var AllBundle;
    (function(AllBundle) {
      AllBundle["resources"] = "resources";
      AllBundle["toon"] = "toon";
      AllBundle["lobby"] = "lobby";
      AllBundle["battle"] = "battle";
      AllBundle["level"] = "level";
      AllBundle["prefab"] = "prefab";
    })(AllBundle = exports.AllBundle || (exports.AllBundle = {}));
    var GBundles = function() {
      function GBundles() {
        this.level_1 = {
          bundle: AllBundle.resources,
          path: "prefab_level/level_1",
          type: cc.Prefab,
          loaded: false
        };
        this.level_2 = {
          bundle: AllBundle.resources,
          path: "prefab_level/level_2",
          type: cc.Prefab,
          loaded: false
        };
        this.level_3 = {
          bundle: AllBundle.resources,
          path: "prefab_level/level_3",
          type: cc.Prefab,
          loaded: false
        };
        this.hero1 = {
          bundle: AllBundle.prefab,
          path: "heroNode",
          type: cc.Prefab,
          loaded: false
        };
        this.enemy = {
          bundle: AllBundle.prefab,
          path: "enemyNode",
          type: cc.Prefab,
          loaded: false
        };
        this.enemy_icon_0 = {
          bundle: AllBundle.resources,
          path: "prefab_node/nodePic/enemy_0",
          type: cc.SpriteFrame,
          loaded: false
        };
        this.enemy_icon_1 = {
          bundle: AllBundle.resources,
          path: "prefab_node/nodePic/enemy_1",
          type: cc.SpriteFrame,
          loaded: false
        };
        this.enemy_icon_2 = {
          bundle: AllBundle.resources,
          path: "prefab_node/nodePic/enemy_2",
          type: cc.SpriteFrame,
          loaded: false
        };
        this.level_di_1 = {
          bundle: AllBundle.resources,
          path: "main/level/06-04",
          type: cc.SpriteFrame,
          loaded: false
        };
        this.level_di_2 = {
          bundle: AllBundle.resources,
          path: "main/level/7-10",
          type: cc.SpriteFrame,
          loaded: false
        };
        this.music_\u5927\u5385\u80cc\u666f\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u5927\u5385\u97f3\u6548",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u5173\u5361\u80cc\u666f\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u5173\u5e95\u80cc\u666f\u97f3\u6548",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u5347\u7ea7 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u5347\u7ea7",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u5207\u6362\u6b66\u5668\u82f1\u96c4 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u70b9\u51fb\u5916\u90e8\u6b66\u5668\u548c\u82f1\u96c4",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u8fdb\u5165\u5173\u5361 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u70b9\u51fb\u5f00\u59cb\u6e38\u620f\u540e",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u8fdb\u5165\u5173\u5361\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u8fdb\u5165\u5173\u5361",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u653b\u51fb\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u666e\u901a\u780d\u4eba\u97f3\u6548",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u51fb\u6740\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u51fb\u6740\u97f3\u6548",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u62fe\u53d6\u98de\u5200\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u56de\u6536\u5200",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u66b4\u8d70\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u66b4\u8d70\u65f6\u523b",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u5173\u5e95\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u5173\u5e95\u80cc\u666f\u97f3\u6548",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u5173\u5e95\u8b66\u544a\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u5371\u9669\u8b66\u544a",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u5931\u8d25\u63d0\u793a\u97f3 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u6e38\u620f\u5931\u8d251",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u80dc\u5229\u63d0\u793a\u97f3 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u901a\u8fc7\u97f3\u6548",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u5899\u4f53\u7834\u88c2\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u5899\u9762\u5d29\u88c2",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u7cfb\u7edf\u81ea\u52a8\u5207\u6362\u4e0b\u4e00\u5173 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u5207\u6362\u4e0b\u4e00\u5173",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u7ed3\u7b97\u91d1\u5e01\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u7ed3\u7b97\u91d1\u5e01",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u989d\u5916\u52a0\u91d1\u5e01\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u989d\u5916+\u91d1\u5e01",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u91d1\u5e01\u8fdb\u5165\u91d1\u5e01\u4f59\u989d\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u4e3b\u9875\u91d1\u5e01\u97f3\u6548",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u5173\u5361\u83b7\u5f97\u65b0\u82f1\u96c4\u63d0\u793a\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u83b7\u5f97\u65b0\u82f1\u96c4\u97f3\u6548",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u70b9\u51fb\u82f1\u96c41\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u82f1\u96c4\u754c\u9762\u89d2\u82721",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u70b9\u51fb\u82f1\u96c42\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u82f1\u96c4\u754c\u9762\u6fc0\u5149",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u70b9\u51fb\u82f1\u96c43\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u82f1\u96c4\u754c\u9762\u706b",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u7b2c\u4e94\u4e2aboss\u51fa\u573a\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u7b2c5\u5173boss\u51fa\u573a\u97f3\u6548",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u7b2c\u4e94\u5173boss\u6b7b\u4ea1\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u7b2c5\u5173boss\u6b7b\u4ea1",
          type: cc.AudioClip,
          loaded: false
        };
        this.music_\u7b2c\u5341\u5173\u7b2c\u4e8c\u5341\u5173boss\u767b\u573a\u97f3\u6548 = {
          bundle: AllBundle.resources,
          path: "\u97f3\u6548/\u7b2c10\u5173boss\u767b\u573a",
          type: cc.AudioClip,
          loaded: false
        };
      }
      return GBundles;
    }();
    exports.GBundle = new GBundles();
    function Window2Node(win) {
      switch (win) {
       case GWindow.level_1:
        return AllAssets.level_1;

       case GWindow.level_2:
        return AllAssets.level_2;

       case GWindow.level_2:
        return AllAssets.level_3;
      }
    }
    exports.Window2Node = Window2Node;
    function asset2bd(key) {
      switch (key) {
       case AllAssets.level_1:
        return exports.GBundle.level_1;

       case AllAssets.level_2:
        return exports.GBundle.level_2;

       case AllAssets.level_3:
        return exports.GBundle.level_3;

       case AllAssets.level_di_1:
        return exports.GBundle.level_di_1;

       case AllAssets.level_di_2:
        return exports.GBundle.level_di_2;

       case AllAssets.enemy_icon_0:
        return exports.GBundle.enemy_icon_0;

       case AllAssets.enemy_icon_1:
        return exports.GBundle.enemy_icon_1;

       case AllAssets.enemy_icon_2:
        return exports.GBundle.enemy_icon_2;

       case AllAssets.music_\u8fdb\u5165\u5173\u5361:
        return exports.GBundle.music_\u8fdb\u5165\u5173\u5361;

       case AllAssets.music_\u5347\u7ea7:
        return exports.GBundle.music_\u5347\u7ea7;

       case AllAssets.music_\u5927\u5385\u80cc\u666f\u97f3\u6548:
        return exports.GBundle.music_\u5927\u5385\u80cc\u666f\u97f3\u6548;

       case AllAssets.music_\u5173\u5361\u80cc\u666f\u97f3\u6548:
        return exports.GBundle.music_\u5173\u5361\u80cc\u666f\u97f3\u6548;

       case AllAssets.music_\u5207\u6362\u6b66\u5668\u82f1\u96c4:
        return exports.GBundle.music_\u5207\u6362\u6b66\u5668\u82f1\u96c4;

       case AllAssets.music_\u8fdb\u5165\u5173\u5361\u97f3\u6548:
        return exports.GBundle.music_\u8fdb\u5165\u5173\u5361\u97f3\u6548;

       case AllAssets.music_\u653b\u51fb\u97f3\u6548:
        return exports.GBundle.music_\u653b\u51fb\u97f3\u6548;

       case AllAssets.music_\u51fb\u6740\u97f3\u6548:
        return exports.GBundle.music_\u51fb\u6740\u97f3\u6548;

       case AllAssets.music_\u62fe\u53d6\u98de\u5200\u97f3\u6548:
        return exports.GBundle.music_\u62fe\u53d6\u98de\u5200\u97f3\u6548;

       case AllAssets.music_\u66b4\u8d70\u97f3\u6548:
        return exports.GBundle.music_\u66b4\u8d70\u97f3\u6548;

       case AllAssets.music_\u5173\u5e95\u97f3\u6548:
        return exports.GBundle.music_\u5173\u5e95\u97f3\u6548;

       case AllAssets.music_\u5173\u5e95\u8b66\u544a\u97f3\u6548:
        return exports.GBundle.music_\u5173\u5e95\u8b66\u544a\u97f3\u6548;

       case AllAssets.music_\u5931\u8d25\u63d0\u793a\u97f3:
        return exports.GBundle.music_\u5931\u8d25\u63d0\u793a\u97f3;

       case AllAssets.music_\u80dc\u5229\u63d0\u793a\u97f3:
        return exports.GBundle.music_\u80dc\u5229\u63d0\u793a\u97f3;

       case AllAssets.music_\u5899\u4f53\u7834\u88c2\u97f3\u6548:
        return exports.GBundle.music_\u5899\u4f53\u7834\u88c2\u97f3\u6548;

       case AllAssets.music_\u7cfb\u7edf\u81ea\u52a8\u5207\u6362\u4e0b\u4e00\u5173:
        return exports.GBundle.music_\u7cfb\u7edf\u81ea\u52a8\u5207\u6362\u4e0b\u4e00\u5173;

       case AllAssets.music_\u7ed3\u7b97\u91d1\u5e01\u97f3\u6548:
        return exports.GBundle.music_\u7ed3\u7b97\u91d1\u5e01\u97f3\u6548;

       case AllAssets.music_\u989d\u5916\u52a0\u91d1\u5e01\u97f3\u6548:
        return exports.GBundle.music_\u989d\u5916\u52a0\u91d1\u5e01\u97f3\u6548;

       case AllAssets.music_\u91d1\u5e01\u8fdb\u5165\u91d1\u5e01\u4f59\u989d\u97f3\u6548:
        return exports.GBundle.music_\u91d1\u5e01\u8fdb\u5165\u91d1\u5e01\u4f59\u989d\u97f3\u6548;

       case AllAssets.music_\u5173\u5361\u83b7\u5f97\u65b0\u82f1\u96c4\u63d0\u793a\u97f3\u6548:
        return exports.GBundle.music_\u5173\u5361\u83b7\u5f97\u65b0\u82f1\u96c4\u63d0\u793a\u97f3\u6548;

       case AllAssets.music_\u70b9\u51fb\u82f1\u96c41\u97f3\u6548:
        return exports.GBundle.music_\u70b9\u51fb\u82f1\u96c41\u97f3\u6548;

       case AllAssets.music_\u70b9\u51fb\u82f1\u96c42\u97f3\u6548:
        return exports.GBundle.music_\u70b9\u51fb\u82f1\u96c42\u97f3\u6548;

       case AllAssets.music_\u70b9\u51fb\u82f1\u96c43\u97f3\u6548:
        return exports.GBundle.music_\u70b9\u51fb\u82f1\u96c43\u97f3\u6548;

       case AllAssets.music_\u7b2c\u4e94\u4e2aboss\u51fa\u573a\u97f3\u6548:
        return exports.GBundle.music_\u7b2c\u4e94\u4e2aboss\u51fa\u573a\u97f3\u6548;

       case AllAssets.music_\u7b2c\u4e94\u5173boss\u6b7b\u4ea1\u97f3\u6548:
        return exports.GBundle.music_\u7b2c\u4e94\u5173boss\u6b7b\u4ea1\u97f3\u6548;

       case AllAssets.music_\u7b2c\u5341\u5173\u7b2c\u4e8c\u5341\u5173boss\u767b\u573a\u97f3\u6548:
        return exports.GBundle.music_\u7b2c\u5341\u5173\u7b2c\u4e8c\u5341\u5173boss\u767b\u573a\u97f3\u6548;

       default:
        return;
      }
    }
    exports.asset2bd = asset2bd;
    cc._RF.pop();
  }, {} ],
  GGlobal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8fa37YyB+JIG7VOZUwOgSIf", "GGlobal");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GGlobal = function() {
      function GGlobal() {}
      GGlobal.getNode = function(n) {
        return GGlobal.nodePool.get(n);
      };
      GGlobal.putNode = function(n, node, onlyOne) {
        GGlobal.nodePool.put(n, node, onlyOne);
      };
      return GGlobal;
    }();
    exports.default = GGlobal;
    cc._RF.pop();
  }, {} ],
  GNodes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67e0cIxVd1Dy5CqRKst3hDD", "GNodes");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GNodes = void 0;
    var GNodes = function() {
      function GNodes() {
        this.pool = {};
      }
      GNodes.prototype.init = function(asset) {
        this.asset = asset;
      };
      GNodes.prototype.release = function() {
        this.asset = void 0;
      };
      GNodes.prototype.load = function(key, onComplete) {
        if (void 0 === key) {
          onComplete();
          return;
        }
        var poolNode = this.get(key);
        if (poolNode) {
          onComplete(poolNode);
          return;
        }
        var assets = this.asset;
        assets.preload(key, function(res) {
          res && res instanceof cc.Prefab ? onComplete(cc.instantiate(res)) : onComplete();
        });
      };
      GNodes.prototype.loadAsync = function(key) {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              _this.load(key, resolve);
            }) ];
          });
        });
      };
      GNodes.prototype.get = function(key) {
        if (void 0 === key) return;
        var p = this.pool[key];
        if (p) if (p instanceof cc.NodePool) {
          if (p.size() > 0) return p.get();
        } else if (p.isValid) {
          this.pool[key] = void 0;
          return p;
        }
        var assets = this.asset;
        var fab = assets.getAsset(key, cc.Prefab);
        if (fab) return cc.instantiate(fab);
        return;
      };
      GNodes.prototype.put = function(key, value, onlyOne) {
        if (void 0 === key) {
          value && value.destroy();
          return;
        }
        var p = this.pool[key];
        if (p) {
          if (p instanceof cc.NodePool) p.put(value); else {
            p.destroy();
            value.active = false;
            value.setParent(null);
            this.pool[key] = value;
          }
          return;
        }
        if (onlyOne) {
          value.active = false;
          value.setParent(null);
          this.pool[key] = value;
          return;
        }
        var pool = new cc.NodePool();
        pool.put(value);
        this.pool[key] = pool;
      };
      GNodes.prototype.clear = function() {
        var pool = this.pool;
        for (var key in pool) {
          if (!Object.prototype.hasOwnProperty.call(pool, key)) continue;
          var element = pool[key];
          if (!element) continue;
          if (element instanceof cc.NodePool) element.clear(); else {
            element.destroy();
            pool[key] = void 0;
          }
        }
      };
      return GNodes;
    }();
    exports.GNodes = GNodes;
    cc._RF.pop();
  }, {} ],
  GPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdae4aUOI5BrIe7/4VmVJt0", "GPlayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GPlayer = void 0;
    var key = "player";
    var GPlayer = function() {
      function GPlayer() {
        this.levelID = 0;
        this.money = 0;
        this.energy = 50;
        this.knifeLevel = 1;
        this.curtHeroId = 0;
        this.unlockHero = [ true, false ];
        this.lastGetEnergyTime = 0;
        this.lastGetOfflineWageTime = 0;
        this.heroLevel = [ {
          level: 1
        }, {
          level: 1
        } ];
      }
      GPlayer.prototype.read = function(complete) {
        try {
          var v = cc.sys.localStorage.getItem(key);
          v && Object.assign(this, JSON.parse(v));
        } catch (error) {}
        complete();
      };
      GPlayer.prototype.write = function() {
        console.log("write");
        cc.sys.localStorage.setItem(key, JSON.stringify(this));
      };
      GPlayer.prototype.getCurtHeroLv = function() {
        return this.heroLevel[this.curtHeroId].level;
      };
      return GPlayer;
    }();
    exports.GPlayer = GPlayer;
    cc._RF.pop();
  }, {} ],
  GStarter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9b21xTUh1DyZ/M8jlSPJTf", "GStarter");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GStarter = void 0;
    var AdAdapter_1 = require("./comm/AdAdapter");
    var CfgMgr_1 = require("./CfgMgr");
    var AudioMgr_1 = require("./comm/AudioMgr");
    var ObjectPool_1 = require("./comm/ObjectPool");
    var SettingMgr_1 = require("./comm/SettingMgr");
    var StructPool_1 = require("./comm/StructPool");
    var GData_1 = require("./GData");
    var GDefine_1 = require("./GDefine");
    var GGlobal_1 = require("./GGlobal");
    var GPlayer_1 = require("./GPlayer");
    var GAsset_1 = require("./GAsset");
    var GNodes_1 = require("./res/GNodes");
    var GStarter = function() {
      function GStarter() {
        this.progress = 0;
        this.tip = "";
        this.completed = false;
      }
      Object.defineProperty(GStarter, "instance", {
        get: function() {
          this._instance || (this._instance = new GStarter());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      GStarter.prototype.start = function(complete) {
        if (this.completed) {
          complete && complete();
          return;
        }
        this.appInit();
        this.tip = "\u6b63\u5728\u542f\u52a8";
      };
      GStarter.prototype.loadLobby = function() {
        cc.director.loadScene(GDefine_1.GScene.lobby);
      };
      GStarter.prototype.appInit = function() {
        GGlobal_1.default.ad = new AdAdapter_1.default();
        GGlobal_1.default.data = new GData_1.GData();
        GGlobal_1.default.player = new GPlayer_1.GPlayer();
        GGlobal_1.default.setting = new SettingMgr_1.SettingMgr();
        GGlobal_1.default.cfg = new CfgMgr_1.CfgMgr();
        GGlobal_1.default.audio = new AudioMgr_1.AudioMgr();
        GGlobal_1.default.pool = new ObjectPool_1.ObjectPool();
        GGlobal_1.default.valuePool = new StructPool_1.StructPool();
        GGlobal_1.default.asset = new GAsset_1.GAsset();
        GGlobal_1.default.nodePool = new GNodes_1.GNodes();
        GGlobal_1.default.nodePool.init(GGlobal_1.default.asset);
        GGlobal_1.default.setting.read();
        GGlobal_1.default.audio.init(GGlobal_1.default.setting);
        GGlobal_1.default.cfg.read(this.readPlayerData.bind(this));
      };
      GStarter.prototype.readPlayerData = function() {
        GGlobal_1.default.player.read(this.onAdInitComplete.bind(this));
      };
      GStarter.prototype.onAdInitComplete = function() {
        this.perloadLobby();
      };
      GStarter.prototype.perloadLobby = function() {
        var _this = this;
        this.tip = "\u6b63\u5728\u52a0\u8f7d\u6e38\u620f\u5927\u5385";
        cc.director.preloadScene(GDefine_1.GScene.lobby, function(c, t, i) {
          _this.progress = .1 + c / t * .9;
        }, function(err) {
          if (err) {
            console.error(err);
            _this.tip = "\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u91cd\u542f\u518d\u8bd5";
          } else {
            _this.completed = true;
            _this.tip = "\u52a0\u8f7d\u5b8c\u6210";
          }
        });
      };
      GStarter.prototype.loadCartoon = function() {};
      return GStarter;
    }();
    exports.GStarter = GStarter;
    cc._RF.pop();
  }, {
    "./CfgMgr": "CfgMgr",
    "./GAsset": "GAsset",
    "./GData": "GData",
    "./GDefine": "GDefine",
    "./GGlobal": "GGlobal",
    "./GPlayer": "GPlayer",
    "./comm/AdAdapter": "AdAdapter",
    "./comm/AudioMgr": "AudioMgr",
    "./comm/ObjectPool": "ObjectPool",
    "./comm/SettingMgr": "SettingMgr",
    "./comm/StructPool": "StructPool",
    "./res/GNodes": "GNodes"
  } ],
  GameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5b7cqqZy1OD6DEzC7lBJZq", "GameScene");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameResult = void 0;
    var EventCenter_1 = require("../comm/EventCenter");
    var UtilFunc_1 = require("../comm/UtilFunc");
    var EffectMgr_1 = require("../effect/EffectMgr");
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var Level_1 = require("../node/Level");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameResult;
    (function(GameResult) {
      GameResult[GameResult["NONE"] = 1] = "NONE";
      GameResult[GameResult["WIN"] = 2] = "WIN";
      GameResult[GameResult["LOSE"] = 3] = "LOSE";
    })(GameResult = exports.GameResult || (exports.GameResult = {}));
    var GameScene = function(_super) {
      __extends(GameScene, _super);
      function GameScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tipLayer = null;
        _this.topLayer = null;
        _this.endLayer = null;
        _this.moneyLayer = null;
        _this.blackLayer = null;
        _this.gameResult = GameResult.NONE;
        _this.isAction = true;
        _this.effectMgr = null;
        _this.rewardTimes = 1;
        return _this;
      }
      GameScene.prototype.onLoad = function() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        GGlobal_1.default.data.state = GDefine_1.GameState.NONE;
        console.log(GGlobal_1.default.player);
      };
      GameScene.prototype.start = function() {
        var _this = this;
        this.initLayer();
        GGlobal_1.default.data.curLevelId = GGlobal_1.default.player.levelID + 1;
        GGlobal_1.default.data.curLevelId > GGlobal_1.default.cfg.level.getMaxLevelValue() - 1 && (GGlobal_1.default.data.curLevelId = GGlobal_1.default.cfg.level.getMaxLevelValue() - 1);
        2 !== GGlobal_1.default.data.curLevelId ? EventCenter_1.EventCenter.emit(GDefine_1.GEvent.UICtrl, GDefine_1.GWindow["level_1"], GDefine_1.GUIState.open) : EventCenter_1.EventCenter.emit(GDefine_1.GEvent.UICtrl, GDefine_1.GWindow["level_" + GGlobal_1.default.data.curLevelId], GDefine_1.GUIState.open);
        this.showTopLayer();
        this.scheduleOnce(function() {
          _this.isAction = false;
        }, 5);
      };
      GameScene.prototype.initLayer = function() {
        this.endLayer.active = false;
        this.blackLayer.active = true;
        cc.tween(this.blackLayer).to(.2, {
          opacity: 0
        }).set({
          active: false
        }).start();
      };
      GameScene.prototype.onEnable = function() {
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.ChangeTipLayerActive, this.onChangeTipLayer, this);
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.AddMoneyToGameLayer, this.onAddMoney, this);
        this.effectMgr = new EffectMgr_1.EffectMgr();
        GGlobal_1.default.asset.preload(GDefine_1.AllAssets.music_\u5173\u5361\u80cc\u666f\u97f3\u6548, function(res) {
          if (res && res instanceof cc.AudioClip) {
            GGlobal_1.default.audio.updateClips([ res ]);
            GGlobal_1.default.audio.playMusic(0);
          }
        });
        this.effectMgr.addListener();
      };
      GameScene.prototype.onDisable = function() {
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.ChangeTipLayerActive, this.onChangeTipLayer, this);
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.AddMoneyToGameLayer, this.onAddMoney, this);
        this.effectMgr.removeListener();
        GGlobal_1.default.data.heroNode = null;
      };
      GameScene.prototype.onToLobbyScene = function() {
        if (this.isAction) return;
        cc.director.loadScene(GDefine_1.GScene.lobby);
      };
      GameScene.prototype.onAdToLobbyScene = function() {
        if (this.isAction) return;
        GGlobal_1.default.data.unissuedMoney = GGlobal_1.default.data.moneyOfCurLevel * (this.rewardTimes - 1);
        GGlobal_1.default.player.money += GGlobal_1.default.data.moneyOfCurLevel * (this.rewardTimes - 1);
        this.savePlayerStorage();
        cc.director.loadScene(GDefine_1.GScene.lobby);
      };
      GameScene.prototype.onAddMoney = function(pos) {
        var _this = this;
        GGlobal_1.default.data.moneyOfCurLevel += GGlobal_1.default.cfg.world.killEnemyAddMoneyCount;
        var coinCount = GGlobal_1.default.cfg.world.killEnemyAddMoneyNodeCount;
        var func = function() {
          GGlobal_1.default.data.moneyOfCurLevelForAction += GGlobal_1.default.cfg.world.killEnemyAddMoneyCount;
          _this.updateMoney();
        };
        var toPos = cc.find("moneyObj", this.topLayer).position;
        for (var i = 0; i < coinCount; i++) {
          var n = this.createMoneyItem(pos);
          cc.tween(n).delay(.5).to(.2 + .2 * Math.random(), {
            position: toPos
          }).call(function() {
            func();
          }).removeSelf().start();
        }
      };
      GameScene.prototype.createMoneyItem = function(pos) {
        var item = cc.instantiate(cc.find("moneyObj/moneyIcon", this.topLayer));
        item.setPosition(pos.x + 100 * Math.random() - 50, pos.y + 100 * Math.random() - 50);
        item.setParent(this.moneyLayer);
        item.getComponent(cc.Animation).play();
        return item;
      };
      GameScene.prototype.onChangeTipLayer = function(isActive) {
        this.tipLayer.active = isActive;
      };
      GameScene.prototype.moveNode = function(node, time, toInfo) {
        cc.tween(node).to(time, toInfo).union().start();
      };
      GameScene.prototype.initEndLayer = function() {
        cc.find("first", this.endLayer).active = false;
        cc.find("first/levelPropObj", this.endLayer).y = 1e3;
        cc.find("first/endTitleObj", this.endLayer).y = -1e3;
        cc.find("second", this.endLayer).active = false;
        cc.find("second/loseRewardNode/getBtn", this.endLayer).active = false;
        cc.find("second/winRewardNode/getBtn", this.endLayer).active = false;
        cc.find("second/winRewardNode/getAdBtn", this.endLayer).active = false;
        this.hideTopLayer();
        cc.find("first/levelPropObj/levelCount", this.endLayer).getComponent(cc.Label).string = GGlobal_1.default.data.curLevelId.toString();
        cc.find("second/loseRewardNode/count", this.endLayer).getComponent(cc.Label).string = GGlobal_1.default.data.moneyOfCurLevel.toString();
      };
      GameScene.prototype.runWinAction = function(tween) {
        var _this = this;
        var first = cc.find("first", this.endLayer);
        var second = cc.find("second", this.endLayer);
        cc.find("winRewardNode", second).active = true;
        tween.call(function() {
          _this.isAction = true;
          first.active = true;
          cc.find("first/endTitleObj/winResult", _this.endLayer).active = true;
          _this.moveNode(cc.find("first/endTitleObj", _this.endLayer), .5, {
            scale: 1,
            y: 260
          });
          _this.moveNode(cc.find("first/levelPropObj", _this.endLayer), .5, {
            y: 410
          });
        });
        tween.delay(.5);
        tween.call(function() {
          first.active = false;
          second.active = true;
          cc.find("levelNode", second).active = true;
          for (var i = 0; i < 4; i++) {
            var levelData = {
              level: GGlobal_1.default.player.levelID - 2 + i,
              spriteDi: i % 2 == 0 && GDefine_1.AllAssets.level_di_1,
              isBoss: (GGlobal_1.default.player.levelID - 1 + i) % 10 == 0,
              isInGame: true,
              id: i
            };
            _this.createLevelNode(levelData, i);
          }
        });
        tween.call(function() {
          _this.scheduleOnce(function() {
            cc.find("winRewardNode/moneyicon", second).getComponent(cc.Animation).play();
          }, .1);
          var index = -1;
          var count = cc.find("winRewardNode/count", second);
          var once_times = .05;
          var times = 5;
          _this.schedule(function() {
            console.log("aaaaaaaaaaa");
            count.getComponent(cc.Label).string = Math.ceil(GGlobal_1.default.data.moneyOfCurLevel / times * ++index).toString();
            2 == index && count.getComponent(cc.Animation).play();
          }, once_times, 5);
          _this.scheduleOnce(function() {
            var bgNode = cc.find("bg", second);
            cc.tween(bgNode).to(.3, {
              height: bgNode.height + 300
            }).start();
          }, .7);
          _this.scheduleOnce(function() {
            cc.find("winRewardNode/getAdBtn", second).active = true;
            cc.find("winRewardNode/getAdBtn", second).getComponent(cc.Animation).play();
            cc.find("winRewardNode/getAdBtn/guangxiao", second).getComponent(cc.Animation).play();
          }, 1);
          _this.scheduleOnce(function() {
            cc.find("winRewardNode/getBtn", second).active = true;
          }, 3);
        });
        tween.delay(1);
        tween.call(function() {
          _this.isAction = false;
        });
        tween.union();
        tween.start();
      };
      GameScene.prototype.runLoseAction = function(tween) {
        var _this = this;
        var first = cc.find("first", this.endLayer);
        var second = cc.find("second", this.endLayer);
        cc.find("loseRewardNode", second).active = true;
        tween.call(function() {
          _this.isAction = true;
          first.active = true;
          cc.find("first/endTitleObj/loseResult", _this.endLayer).active = true;
          _this.moveNode(cc.find("first/endTitleObj", _this.endLayer), .5, {
            scale: 1,
            y: 260
          });
          _this.moveNode(cc.find("first/levelPropObj", _this.endLayer), .5, {
            y: 410
          });
        });
        tween.delay(1.5);
        tween.call(function() {
          first.active = false;
          second.active = true;
          _this.scheduleOnce(function() {
            cc.find("loseRewardNode/moneyicon", second).getComponent(cc.Animation).play();
          }, .1);
          _this.scheduleOnce(function() {
            cc.find("loseRewardNode/count", second).getComponent(cc.Animation).play();
          }, .3);
          _this.scheduleOnce(function() {
            var bgNode = cc.find("bg", second);
            cc.tween(bgNode).to(.3, {
              height: bgNode.height + 200
            }).start();
          }, .7);
          _this.scheduleOnce(function() {
            cc.find("loseRewardNode/getBtn", second).active = true;
          }, 1);
        });
        tween.delay(1);
        tween.call(function() {
          _this.isAction = false;
        });
        tween.union();
        tween.start();
      };
      GameScene.prototype.runEndLayerAction = function() {
        this.initEndLayer();
        var first = cc.find("first", this.endLayer);
        var second = cc.find("second", this.endLayer);
        var endTween = cc.tween(this.endLayer);
        this.gameResult == GameResult.WIN && this.runWinAction(endTween);
        this.gameResult == GameResult.LOSE && this.runLoseAction(endTween);
        this.endLayer.active = true;
      };
      GameScene.prototype.createLevelNode = function(levelData, index) {
        return __awaiter(this, void 0, void 0, function() {
          var level_di, fab, n;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              level_di = cc.find("second/levelNode/levelNode", this.endLayer);
              return [ 4, UtilFunc_1.LoadRes("prefab_node/levelNode", cc.Prefab) ];

             case 1:
              fab = _a.sent();
              n = cc.instantiate(fab);
              n.setParent(level_di);
              n.getComponent(Level_1.default).init(levelData);
              n.setPosition(100 * index - 100, 0);
              cc.tween(n).delay(.5).call(function() {
                n.getComponent(Level_1.default).move();
              }).start();
              return [ 2 ];
            }
          });
        });
      };
      GameScene.prototype.initTopLayer = function() {
        this.updateMoney();
        cc.find("levelPropObj/levelCount", this.topLayer).getComponent(cc.Label).string = GGlobal_1.default.data.curLevelId.toString();
      };
      GameScene.prototype.showTopLayer = function() {
        this.initTopLayer();
        this.topLayer.active = true;
      };
      GameScene.prototype.hideTopLayer = function() {
        this.topLayer.active = false;
      };
      GameScene.prototype.updateMoney = function() {
        cc.find("moneyObj/money", this.topLayer).getComponent(cc.Label).string = GGlobal_1.default.data.moneyOfCurLevelForAction.toString();
      };
      GameScene.prototype.checkIsGameOver = function() {
        if (!GGlobal_1.default.data.heroNode || GGlobal_1.default.data.state == GDefine_1.GameState.NONE) return false;
        if (!GGlobal_1.default.data.heroIsAlive) {
          GGlobal_1.default.data.state = GDefine_1.GameState.GAMEOVER;
          this.gameResult = GameResult.LOSE;
          return true;
        }
        if (GGlobal_1.default.data.killEnemyOfCurLevel < GGlobal_1.default.cfg.level.getLevelEnemyCountByLevel(GGlobal_1.default.data.curLevelId)) return false;
        if (GGlobal_1.default.data.enemyPool.length <= 0) {
          GGlobal_1.default.data.state = GDefine_1.GameState.GAMEOVER;
          this.gameResult = GameResult.WIN;
          return true;
        }
        return false;
      };
      GameScene.prototype.checkQuickBuff = function() {
        if (GGlobal_1.default.data.quickSpeedLastTime > 0) {
          cc.find("quickitem", this.topLayer).active = true;
          cc.find("quickitem/fill", this.topLayer).getComponent(cc.Sprite).fillRange = GGlobal_1.default.data.quickSpeedLastTime / GGlobal_1.default.cfg.world.quickItemSpeedLastTime;
        } else cc.find("quickitem", this.topLayer).active = false;
      };
      GameScene.prototype.update = function(dt) {
        this.checkQuickBuff();
        if (this.checkIsGameOver()) {
          if (this.gameResult === GameResult.WIN) {
            GGlobal_1.default.data.curLevelId >= GGlobal_1.default.player.levelID && (GGlobal_1.default.player.levelID = GGlobal_1.default.data.curLevelId);
            EventCenter_1.EventCenter.emit(GDefine_1.GEvent.PlaySound, GDefine_1.AllAssets.music_\u80dc\u5229\u63d0\u793a\u97f3);
            EventCenter_1.EventCenter.emit(GDefine_1.GEvent.OpenLevelDoor);
          } else EventCenter_1.EventCenter.emit(GDefine_1.GEvent.PlaySound, GDefine_1.AllAssets.music_\u5931\u8d25\u63d0\u793a\u97f3);
          GGlobal_1.default.data.unissuedMoney = GGlobal_1.default.data.moneyOfCurLevel;
          GGlobal_1.default.player.money += GGlobal_1.default.data.moneyOfCurLevel;
          GGlobal_1.default.data.state = GDefine_1.GameState.NONE;
          this.onChangeTipLayer(false);
          console.log(this.gameResult);
          this.savePlayerStorage();
          this.runEndLayerAction();
        }
      };
      GameScene.prototype.savePlayerStorage = function() {
        GGlobal_1.default.player.write();
      };
      __decorate([ property(cc.Node) ], GameScene.prototype, "tipLayer", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "topLayer", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "endLayer", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "moneyLayer", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "blackLayer", void 0);
      GameScene = __decorate([ ccclass ], GameScene);
      return GameScene;
    }(cc.Component);
    exports.default = GameScene;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter",
    "../comm/UtilFunc": "UtilFunc",
    "../effect/EffectMgr": "EffectMgr",
    "../node/Level": "Level"
  } ],
  GifPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a808KpGfZJaLHDLQ1Ocf6I", "GifPlayer");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
    var GifPlayer = function(_super) {
      __extends(GifPlayer, _super);
      function GifPlayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.frames = [];
        _this.interval = .04;
        _this.randomStart = false;
        _this.loop = true;
        _this.time = 0;
        _this.index = 0;
        return _this;
      }
      GifPlayer.prototype.onLoad = function() {
        this.sprite = this.getComponent(cc.Sprite);
      };
      GifPlayer.prototype.onEnable = function() {
        this.reset();
      };
      GifPlayer.prototype.reset = function() {
        if (this.randomStart) {
          this.index = Math.floor(Math.random() % 1 * this.frames.length);
          this.time = Math.random() * this.interval;
        } else {
          this.index = 0;
          this.time = 0;
        }
        this.sprite.spriteFrame = this.frames[this.index];
      };
      GifPlayer.prototype.update = function(dt) {
        this.time += dt;
        if (this.time >= this.interval) {
          this.time -= this.interval;
          this.index++;
          if (this.index >= this.frames.length) if (this.loop) {
            this.node.emit("GifLast", this);
            this.index = 0;
            this.sprite.spriteFrame = this.frames[this.index];
          } else {
            this.index === this.frames.length && this.node.emit("GifFinish", this);
            this.sprite.spriteFrame = null;
          } else this.sprite.spriteFrame = this.frames[this.index];
        }
      };
      __decorate([ property(cc.SpriteFrame) ], GifPlayer.prototype, "frames", void 0);
      __decorate([ property ], GifPlayer.prototype, "interval", void 0);
      __decorate([ property ], GifPlayer.prototype, "randomStart", void 0);
      __decorate([ property ], GifPlayer.prototype, "loop", void 0);
      GifPlayer = __decorate([ ccclass, requireComponent(cc.Sprite) ], GifPlayer);
      return GifPlayer;
    }(cc.Component);
    exports.default = GifPlayer;
    cc._RF.pop();
  }, {} ],
  GuideMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9800c9Xr3pNiKBKM69GZl0R", "GuideMgr");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GuideMgr = void 0;
    var EventCenter_1 = require("./EventCenter");
    var UtilFunc_1 = require("./UtilFunc");
    var GuideMgr = function() {
      function GuideMgr() {
        this.nodeTable = {};
      }
      Object.defineProperty(GuideMgr.prototype, "task", {
        get: function() {
          if (!this.storage || !this.storage.guide || 0 === this.storage.guide.length) return;
          return this.storage.guide[0];
        },
        enumerable: false,
        configurable: true
      });
      GuideMgr.prototype.isTask = function(id) {
        var ids = [];
        for (var _i = 1; _i < arguments.length; _i++) ids[_i - 1] = arguments[_i];
        ids.unshift(id);
        for (var i = 0; i < ids.length; i++) if (ids[i] === this.currTask) return true;
        return false;
      };
      GuideMgr.prototype.isFinished = function(id) {
        if (!this.storage || !this.storage.guide || 0 === this.storage.guide.length) return false;
        if (this.storage.guide.indexOf(id) < 0) return false;
        return true;
      };
      Object.defineProperty(GuideMgr.prototype, "taskObj", {
        get: function() {
          if (!this.currTask) return;
          return this.getTask(this.currTask);
        },
        enumerable: false,
        configurable: true
      });
      GuideMgr.prototype.getTask = function(id) {
        if (!this.cfg) return;
        for (var i = 0, len = this.cfg.tasks.length; i < len; i++) {
          var element = this.cfg.tasks[i];
          if (element.id === id) return element;
        }
      };
      GuideMgr.prototype.init = function(storage, cfg) {
        this.release();
        this.storage = storage;
        this.cfg = cfg;
        this.addListeners(cfg);
        return this;
      };
      GuideMgr.prototype.release = function() {
        var taskObj = this.taskObj;
        taskObj && this.releaseTask(taskObj);
        this.storage = null;
        this.removeListeners(this.cfg);
        this.cfg = null;
      };
      GuideMgr.prototype.addListeners = function(cfg) {
        if (!this.cfg) return;
        EventCenter_1.EventCenter.on(this.cfg.check_event, this.onCheckEvent, this);
        for (var _i = 0, _a = cfg.activation_event; _i < _a.length; _i++) {
          var iterator = _a[_i];
          this.addActivationEvent(iterator.event, iterator.task);
        }
      };
      GuideMgr.prototype.removeListeners = function(cfg) {
        EventCenter_1.EventCenter.offTarget(this);
      };
      GuideMgr.prototype.onCheckEvent = function() {
        if (!this.cfg) return;
        this.currTask = this.task;
        var taskObj = this.taskObj;
        if (taskObj) {
          var next = this.getNextTask(taskObj);
          next && this.initTask(next);
          return;
        }
        this.startTask(this.cfg.first_task);
      };
      GuideMgr.prototype.addActivationEvent = function(event, task) {
        var _this = this;
        EventCenter_1.EventCenter.on(event, function() {
          _this.startTask(task);
        }, this);
      };
      GuideMgr.prototype.startTask = function(task) {
        if (this.storage.guide && this.storage.guide.indexOf(task) >= 0) return;
        if (this.getNextTask(this.taskObj)) return;
        var next = this.getTask(task);
        if (next) {
          this.storage.guide || (this.storage.guide = [ task ]);
          this.storage.guide.push(task);
          this.initTask(next);
        }
      };
      GuideMgr.prototype.initTask = function(task) {
        return __awaiter(this, void 0, Promise, function() {
          var fab, color;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              console.log("initTask", task);
              this.storage.guide || (this.storage.guide = []);
              this.currTask = task.id;
              if (this.bg) {
                this.bg.destroy();
                this.bg = null;
              }
              if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
              }
              this.cfg && EventCenter_1.EventCenter.emit(this.cfg.event_type, task.start_event_arg);
              if (!task.bg_prefab) return [ 3, 2 ];
              return [ 4, UtilFunc_1.LoadRes(task.bg_prefab, cc.Prefab) ];

             case 1:
              fab = _a.sent();
              if (fab) {
                this.bg = cc.instantiate(fab);
                this.bg.setParent(cc.Canvas.instance.node);
                this.bg.setPosition(0, 0, 0);
                if (task.bg_hex_color && this.bg.children[0]) {
                  color = cc.color();
                  color.fromHEX(task.bg_hex_color);
                  this.bg.children[0].color = color;
                }
              }
              _a.label = 2;

             case 2:
              if (!this.bg) {
                this.bg = new cc.Node("GuideBg");
                this.bg.setParent(cc.Canvas.instance.node);
                if (!task.not_blockInputEvents) {
                  this.bg.addComponent(cc.Sprite);
                  this.bg.addComponent(cc.BlockInputEvents);
                }
                this.bg.setPosition(0, 0, 0);
                this.bg.setContentSize(cc.winSize);
              }
              this.startWorks(task.id, task.works);
              task.time_out && (this.timer = setTimeout(function() {
                _this.onTimeout(task);
                _this.timer = null;
              }, 1e3 * task.time_out));
              if (task.wait_event_on) {
                this.onWaitEvent = function() {
                  if (!_this.cfg) return false;
                  if (_this.currTask !== task.id) return false;
                  _this.onFinishTask(task);
                };
                EventCenter_1.EventCenter.on(task.wait_event_on, this.onWaitEvent, this);
              }
              return [ 2 ];
            }
          });
        });
      };
      GuideMgr.prototype.releaseTask = function(task) {
        if (task.storage || !this.getNextTask(task)) {
          this.storage.guide[0] = task.id;
          this.cfg && this.cfg.storage_event && EventCenter_1.EventCenter.emit(this.cfg.storage_event, this.storage);
        }
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        this.bg.destroy();
        task.wait_event_on && EventCenter_1.EventCenter.off(task.wait_event_on, this.onWaitEvent, this);
      };
      GuideMgr.prototype.onTimeout = function(task) {
        if (!this.cfg) return false;
        if (this.currTask !== task.id) return false;
        this.onFinishTask(task);
      };
      GuideMgr.prototype.onClick = function(work) {
        var click_event = work.click_event_arg;
        if (!this.cfg) return false;
        if (this.currTask !== work.task_id) return false;
        EventCenter_1.EventCenter.emit(this.cfg.event_type, click_event);
        return true;
      };
      GuideMgr.prototype.onFinishTask = function(task) {
        this.cfg && task.finish_event_arg && EventCenter_1.EventCenter.emit(this.cfg.event_type, task.finish_event_arg);
        this.releaseTask(task);
        this.toNextTask(task);
      };
      GuideMgr.prototype.toNextTask = function(currTask) {
        var next = this.getNextTask(currTask);
        if (!next) return;
        this.initTask(next);
      };
      GuideMgr.prototype.getNextTask = function(currTask) {
        if (!currTask) return;
        if (!currTask.next) return;
        if (!this.cfg) return;
        return this.getTask(currTask.next);
      };
      GuideMgr.prototype.startWorks = function(currTaskId, works) {
        return __awaiter(this, void 0, Promise, function() {
          var _i, works_1, iterator, w, error_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!works) return [ 2 ];
              _i = 0, works_1 = works;
              _a.label = 1;

             case 1:
              if (!(_i < works_1.length)) return [ 3, 6 ];
              iterator = works_1[_i];
              w = iterator;
              _a.label = 2;

             case 2:
              _a.trys.push([ 2, 4, , 5 ]);
              w.task_id = currTaskId;
              return [ 4, this.startWork(w) ];

             case 3:
              _a.sent();
              return [ 3, 5 ];

             case 4:
              error_1 = _a.sent();
              console.error("[GuideMgr.startWork] -> ", w, error_1);
              return [ 3, 5 ];

             case 5:
              _i++;
              return [ 3, 1 ];

             case 6:
              return [ 2 ];
            }
          });
        });
      };
      GuideMgr.prototype.startWork = function(work) {
        return __awaiter(this, void 0, Promise, function() {
          var force_click, node;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              force_click = this.handleWorForceClick(work);
              return [ 4, this.handleWorkPrefab(work.prefab, work.label) ];

             case 1:
              node = _a.sent();
              this.handleWorkPos(node, work.pos, work.pos_origin, force_click, work.fit_size);
              return [ 2 ];
            }
          });
        });
      };
      GuideMgr.prototype.handleWorkPrefab = function(prefab, labler) {
        return __awaiter(this, void 0, Promise, function() {
          var fab, node, label;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!prefab || !this.bg) return [ 2 ];
              return [ 4, UtilFunc_1.LoadRes(prefab, cc.Prefab) ];

             case 1:
              fab = _a.sent();
              if (!fab) return [ 2 ];
              node = cc.instantiate(fab);
              if (!node) return [ 2 ];
              node.setParent(this.bg);
              if (labler) {
                label = node.getComponentInChildren(cc.Label);
                label && (label.string = labler);
              }
              return [ 2, node ];
            }
          });
        });
      };
      GuideMgr.prototype.handleWorForceClick = function(work) {
        var _this = this;
        var fab;
        if (work.force_click_item_key) fab = this.nodeTable[work.force_click_item_key]; else {
          var force_click = work.force_click;
          if (!force_click || !this.bg) return;
          fab = cc.find(force_click);
        }
        if (!fab) return;
        var node = cc.instantiate(fab);
        if (!node) return;
        node.setParent(this.bg);
        var ws = cc.v3();
        fab.getWorldPosition(ws);
        node.setWorldPosition(ws);
        fab.getWorldScale(ws);
        node.setWorldScale(ws);
        var btn = node.getComponent(cc.Button) || node.addComponent(cc.Button);
        btn.clickEvents && (btn.clickEvents.length = 0);
        node.on("click", function() {
          var ok = _this.onClick(work);
          if (!ok) return;
          if (!work.not_call_source && fab) {
            var b = fab.getComponent(cc.Button);
            if (b) {
              fab.emit("click", b);
              cc.Component.EventHandler.emitEvents(b.clickEvents);
            }
          }
          if (work.is_main) {
            var t = _this.getTask(work.task_id);
            t && _this.onFinishTask(t);
          }
        }, this);
        return node;
      };
      GuideMgr.prototype.handleWorkPos = function(node, pos, pos_origin, force_click, fit_size) {
        if (!node) return;
        pos || (pos = cc.v3());
        pos_origin && ("force" !== pos_origin || force_click) || (pos_origin = "bg");
        switch (pos_origin) {
         case "bg":
          node.setPosition(cc.v3(pos));
          break;

         case "force":
          var fpos = cc.v3();
          force_click.getWorldPosition(fpos);
          fpos.x += pos.x;
          fpos.y += pos.y;
          node.setWorldPosition(fpos);
          break;

         case "world":
          node.setWorldPosition(cc.v3(pos));
        }
        if (force_click && fit_size) {
          var s = force_click.getContentSize();
          s.width += 10;
          s.height += 10;
          node.setContentSize(s);
        }
      };
      return GuideMgr;
    }();
    exports.GuideMgr = GuideMgr;
    cc._RF.pop();
  }, {
    "./EventCenter": "EventCenter",
    "./UtilFunc": "UtilFunc"
  } ],
  HeroCfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e27eVGJRZF1r2jxYfmYrzp", "HeroCfg");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HeroCfg = exports.HeroKnifeType = void 0;
    var GGlobal_1 = require("../GGlobal");
    var KnifeCfg_1 = require("./KnifeCfg");
    var HeroKnifeType;
    (function(HeroKnifeType) {
      HeroKnifeType[HeroKnifeType["NONE"] = 0] = "NONE";
      HeroKnifeType[HeroKnifeType["DEFAULT"] = 1] = "DEFAULT";
      HeroKnifeType[HeroKnifeType["LINE"] = 2] = "LINE";
    })(HeroKnifeType = exports.HeroKnifeType || (exports.HeroKnifeType = {}));
    var HeroCfg = function() {
      function HeroCfg() {
        this["0"] = {
          heroId: 1,
          heroPic: "",
          level: [ {
            level: 0,
            attackValue: 0,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 0
          }, {
            level: 1,
            attackValue: 1,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 100
          }, {
            level: 2,
            attackValue: 2,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 200
          }, {
            level: 3,
            attackValue: 3,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 300
          }, {
            level: 4,
            attackValue: 4,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 400
          }, {
            level: 5,
            attackValue: 5,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 500
          }, {
            level: 6,
            attackValue: 6,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 600
          }, {
            level: 7,
            attackValue: 7,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 700
          }, {
            level: 8,
            attackValue: 8,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 800
          }, {
            level: 9,
            attackValue: 9,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 900
          }, {
            level: 10,
            attackValue: 10,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 1e3
          } ]
        };
        this["1"] = {
          heroId: 2,
          heroPic: "",
          level: [ {
            level: 0,
            attackValue: 0,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 0
          }, {
            level: 1,
            attackValue: 1,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 11
          }, {
            level: 2,
            attackValue: 2,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 0,
            upCost: 12
          }, {
            level: 3,
            attackValue: 3,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 13
          }, {
            level: 4,
            attackValue: 4,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 14
          }, {
            level: 5,
            attackValue: 5,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 15
          }, {
            level: 6,
            attackValue: 6,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 16
          }, {
            level: 7,
            attackValue: 7,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 17
          }, {
            level: 8,
            attackValue: 8,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 18
          }, {
            level: 9,
            attackValue: 9,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 19
          }, {
            level: 10,
            attackValue: 10,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 20
          }, {
            level: 11,
            attackValue: 11,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 21
          }, {
            level: 12,
            attackValue: 12,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 22
          }, {
            level: 13,
            attackValue: 13,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 23
          }, {
            level: 14,
            attackValue: 14,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 24
          }, {
            level: 15,
            attackValue: 15,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 25
          }, {
            level: 16,
            attackValue: 16,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 26
          }, {
            level: 17,
            attackValue: 17,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 27
          }, {
            level: 18,
            attackValue: 18,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 28
          }, {
            level: 19,
            attackValue: 19,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 29
          }, {
            level: 20,
            attackValue: 20,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 30
          }, {
            level: 21,
            attackValue: 21,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 31
          }, {
            level: 22,
            attackValue: 22,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 32
          }, {
            level: 23,
            attackValue: 23,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 33
          }, {
            level: 24,
            attackValue: 24,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 34
          }, {
            level: 25,
            attackValue: 25,
            shypeType: KnifeCfg_1.KnifeShypeType.HEROKNIFE,
            picPath: "",
            knifeCount: 6,
            upCost: 35
          } ]
        };
      }
      HeroCfg.prototype.getHeroData = function(heroId, heroLv, heroKnifeLv) {
        var heroData = {
          heroId: 0,
          heroPic: "",
          level: [],
          heroKnifeData: {
            level: 0,
            attackValue: 0,
            shypeType: KnifeCfg_1.KnifeShypeType.NONE,
            picPath: "",
            knifeCount: 0
          },
          knifeProp: {
            level: 0,
            attackValue: 0,
            shypeType: KnifeCfg_1.KnifeShypeType.NONE,
            picPath: "",
            knifeCount: 0
          }
        };
        Object.assign(heroData, this[heroId]);
        heroData.knifeProp = GGlobal_1.default.cfg.knife.getKnifeDataByLv(heroKnifeLv);
        Object.assign(heroData.heroKnifeData, heroData.level[heroLv]);
        return heroData;
      };
      HeroCfg.prototype.getCurHeroLv = function() {
        if (!GGlobal_1.default.player) return;
        return GGlobal_1.default.player.heroLevel[GGlobal_1.default.player.curtHeroId].level;
      };
      HeroCfg.prototype.getUpHeroCost = function() {
        if (!GGlobal_1.default.player) return;
        if (!this[GGlobal_1.default.player.curtHeroId].level[this.getCurHeroLv() + 1]) return -1;
        return this[GGlobal_1.default.player.curtHeroId].level[this.getCurHeroLv() + 1].upCost;
      };
      HeroCfg.prototype.getUpHeroKnifeAttack = function() {
        if (!GGlobal_1.default.player) return;
        if (!this[GGlobal_1.default.player.curtHeroId].level[this.getCurHeroLv()]) return -1;
        return this[GGlobal_1.default.player.curtHeroId].level[this.getCurHeroLv()].attackValue;
      };
      return HeroCfg;
    }();
    exports.HeroCfg = HeroCfg;
    cc._RF.pop();
  }, {
    "../GGlobal": "GGlobal",
    "./KnifeCfg": "KnifeCfg"
  } ],
  Hero: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67204qKQZlOa47Ee/sC28T+", "Hero");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GGlobal_1 = require("../GGlobal");
    var UtilFunc_1 = require("../comm/UtilFunc");
    var Knife_1 = require("./Knife");
    var EventCenter_1 = require("../comm/EventCenter");
    var GDefine_1 = require("../GDefine");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Hero = function(_super) {
      __extends(Hero, _super);
      function Hero() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.knifePool = [];
        _this.tt = 0;
        return _this;
      }
      Hero.prototype.onEnable = function() {
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.EatQuickSpeedItem, this.onEatQuickSpeedItem, this);
      };
      Hero.prototype.onDisable = function() {
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.EatQuickSpeedItem, this.onEatQuickSpeedItem, this);
      };
      Hero.prototype.onEatQuickSpeedItem = function() {
        GGlobal_1.default.data.quickSpeedLastTime = GGlobal_1.default.cfg.world.quickItemSpeedLastTime;
      };
      Hero.prototype.init = function(heroData) {
        GGlobal_1.default.data.heroNode = this.node;
        GGlobal_1.default.data.HeroAreaNode = this.node.getChildByName("hero");
        this.heroData = heroData;
        this.createKnifes1();
        this.createKnifes2();
      };
      Hero.prototype.die = function() {
        this.node.active = false;
      };
      Hero.prototype.revive = function() {};
      Hero.prototype.createKnifes1 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var knifeCount, i, n;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              knifeCount = this.heroData.knifeProp.knifeCount;
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < knifeCount)) return [ 3, 4 ];
              return [ 4, this.createKnife(i) ];

             case 2:
              n = _a.sent();
              this.knifePool.push(n);
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              this.updateKnifesPosition();
              return [ 2 ];
            }
          });
        });
      };
      Hero.prototype.createKnifes2 = function() {
        return __awaiter(this, void 0, void 0, function() {
          var knifeCount, knifeRadius, tab, i, knife_di, fab, n, i, angle, pos;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              knifeCount = this.heroData.heroKnifeData.knifeCount;
              knifeRadius = 60;
              tab = [];
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < knifeCount)) return [ 3, 4 ];
              knife_di = this.node.getChildByName("heroKnife1");
              return [ 4, UtilFunc_1.LoadRes("prefab_node/knifeNode2", cc.Prefab) ];

             case 2:
              fab = _a.sent();
              n = cc.instantiate(fab);
              n.setParent(knife_di);
              n.getComponent(Knife_1.default).init(this.heroData.heroKnifeData);
              tab.push(n);
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              for (i = 0; i < tab.length; i++) {
                angle = 360 / knifeCount * i;
                pos = this.getKnifePosition(angle, knifeRadius);
                if (!tab[i]) return [ 2 ];
                tab[i].setPosition(pos);
                tab[i].setRotation(angle);
              }
              return [ 2 ];
            }
          });
        });
      };
      Hero.prototype.updateKnifesPosition = function() {
        for (var i = 0; i < this.knifePool.length; i++) {
          var angle = 360 / this.heroData.knifeProp.knifeCount * i;
          var pos = this.getKnifePosition(angle);
          this.knifePool[i].setPosition(pos);
          this.knifePool[i].setRotation(angle);
        }
      };
      Hero.prototype.getKnifePosition = function(angle, radius) {
        var pos = cc.v3();
        radius = radius || GGlobal_1.default.cfg.world.getRadiusByCount(this.heroData.knifeProp.knifeCount);
        var radian = cc.misc.degreesToRadians(angle);
        var comVec = cc.v2(0, 1);
        var dirVec = comVec.rotate(-radian);
        dirVec = dirVec.normalizeSelf().mul(radius);
        pos.x = dirVec.x;
        pos.y = dirVec.y;
        return pos;
      };
      Hero.prototype.createKnife = function(index) {
        return __awaiter(this, void 0, void 0, function() {
          var knife_di, fab, n;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              knife_di = this.node.getChildByName("heroKnife0");
              return [ 4, UtilFunc_1.LoadRes("prefab_node/knifeNode", cc.Prefab) ];

             case 1:
              fab = _a.sent();
              n = cc.instantiate(fab);
              n.setParent(knife_di);
              n.getComponent(Knife_1.default).init(this.heroData.knifeProp);
              return [ 2, n ];
            }
          });
        });
      };
      Hero.prototype.updateKnifes = function(heroData) {
        return __awaiter(this, void 0, void 0, function() {
          var i, n;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.heroData = heroData;
              i = this.knifePool.length;
              _a.label = 1;

             case 1:
              if (!(i < this.heroData.knifeProp.knifeCount)) return [ 3, 4 ];
              return [ 4, this.createKnife(i) ];

             case 2:
              n = _a.sent();
              this.knifePool.push(n);
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              this.updateKnifesPosition();
              return [ 2 ];
            }
          });
        });
      };
      Hero.prototype.update = function(dt) {
        GGlobal_1.default.data.quickSpeedLastTime > 0 ? GGlobal_1.default.data.quickSpeedLastTime -= dt * GGlobal_1.default.data.GameSpeed : GGlobal_1.default.data.quickSpeedLastTime = 0;
        if (!GGlobal_1.default.data.offset_position) return;
        this.tt = 0;
        var maxMoveDistance = 45;
        var moveX_Distance = Math.abs(GGlobal_1.default.data.offset_position.x / 2) > maxMoveDistance ? GGlobal_1.default.data.offset_position.x >= 0 ? maxMoveDistance : -maxMoveDistance : GGlobal_1.default.data.offset_position.x / 2;
        var moveY_Distance = Math.abs(GGlobal_1.default.data.offset_position.y / 2) > maxMoveDistance ? GGlobal_1.default.data.offset_position.y >= 0 ? maxMoveDistance : -maxMoveDistance : GGlobal_1.default.data.offset_position.y / 2;
        this.node.x += moveX_Distance;
        this.node.y += moveY_Distance;
        GGlobal_1.default.data.offset_position.x -= moveX_Distance;
        GGlobal_1.default.data.offset_position.y -= moveY_Distance;
      };
      Hero.prototype.onBeginContact = function(contact, selfCollider, otherConllider) {
        if ("wall" === otherConllider.node.group) return;
        if ("enemy" === otherConllider.node.group) {
          if (this.heroData.heroIsDad) return;
          console.log("\u4e3b\u89d2\u5df2\u9635\u4ea1");
          GGlobal_1.default.data.heroIsAlive = false;
          this.die();
        }
      };
      Hero = __decorate([ ccclass ], Hero);
      return Hero;
    }(cc.Component);
    exports.default = Hero;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter",
    "../comm/UtilFunc": "UtilFunc",
    "./Knife": "Knife"
  } ],
  IStateSync: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb840uz4DxEQaIX9cg8damf", "IStateSync");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MachineSync = void 0;
    var MachineSync = function() {
      function MachineSync() {
        this.stateArg = [];
        this.switching = false;
        this.states = {};
      }
      MachineSync.prototype.switchState = function(s) {
        this.switchStateNext = s;
      };
      MachineSync.prototype.update = function(dt) {
        if (this.switching) return;
        if (!this.currState) return;
        if (this.currState.type !== this.nextState) {
          this.doSwitchState();
          return;
        }
        this.nextState = this.currState.onUpdate(dt);
        void 0 !== this.switchStateNext && (this.nextState = this.switchStateNext);
      };
      MachineSync.prototype.doSwitchState = function() {
        delete this.switchStateNext;
        this.switching = true;
        this.currState.onExit();
        this.previousState = this.currState.type;
        this.currState = this.getState(this.nextState);
        this.currState.onEnter(this.stateArg);
        this.stateArg.length = 0;
        this.onStateChange(this.nextState);
        this.switching = false;
      };
      MachineSync.prototype.onStateChange = function(state) {};
      MachineSync.prototype.getState = function(type) {
        return this.states[type];
      };
      MachineSync.prototype.init = function(s) {
        this.currState && this.currState.onExit();
        this.currState = this.states[s];
        this.nextState = s;
        this.currState.onEnter(this.stateArg);
        this.onStateChange(this.nextState);
      };
      return MachineSync;
    }();
    exports.MachineSync = MachineSync;
    cc._RF.pop();
  }, {} ],
  IState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6396Msxz5Bz6ZkFcJ2UIK9", "IState");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Machine = void 0;
    var Machine = function() {
      function Machine() {
        this.stateArg = [];
        this.switching = false;
        this.states = {};
      }
      Machine.prototype.switchState = function(s) {
        this.switchStateNext = s;
      };
      Machine.prototype.update = function(dt) {
        if (this.switching) return;
        if (!this.currState) return;
        if (this.currState.type !== this.nextState) {
          this.doSwitchState();
          return;
        }
        this.nextState = this.currState.onUpdate(dt);
        void 0 !== this.switchStateNext && (this.nextState = this.switchStateNext);
      };
      Machine.prototype.doSwitchState = function() {
        return __awaiter(this, void 0, void 0, function() {
          var extPri, entPri;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              delete this.switchStateNext;
              this.switching = true;
              extPri = this.currState.onExit();
              if (!(extPri instanceof Promise)) return [ 3, 2 ];
              return [ 4, extPri ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.previousState = this.currState.type;
              this.currState = this.getState(this.nextState);
              entPri = this.currState.onEnter(this.stateArg);
              if (!(entPri instanceof Promise)) return [ 3, 4 ];
              return [ 4, entPri ];

             case 3:
              _a.sent();
              _a.label = 4;

             case 4:
              this.stateArg.length = 0;
              this.onStateChange(this.nextState);
              this.switching = false;
              return [ 2 ];
            }
          });
        });
      };
      Machine.prototype.onStateChange = function(state) {};
      Machine.prototype.getState = function(type) {
        return this.states[type];
      };
      Machine.prototype.init = function(s) {
        return __awaiter(this, void 0, void 0, function() {
          var p_1, p;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!this.currState) return [ 3, 2 ];
              p_1 = this.currState.onExit();
              if (!(p_1 instanceof Promise)) return [ 3, 2 ];
              return [ 4, p_1 ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              this.currState = this.states[s];
              this.nextState = s;
              p = this.currState.onEnter(this.stateArg);
              if (!(p instanceof Promise)) return [ 3, 4 ];
              return [ 4, p ];

             case 3:
              _a.sent();
              _a.label = 4;

             case 4:
              this.onStateChange(this.nextState);
              return [ 2 ];
            }
          });
        });
      };
      return Machine;
    }();
    exports.Machine = Machine;
    cc._RF.pop();
  }, {} ],
  IStorage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4aa6caBnPlBLJY/dumTuj0J", "IStorage");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  Item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "44f46SVYpZBrLXRsq7GXGeK", "Item");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var EventCenter_1 = require("../comm/EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Item = function(_super) {
      __extends(Item, _super);
      function Item() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.wildBornTime = 0;
        _this.tt = 0;
        _this.isTouch = false;
        return _this;
      }
      Item.prototype.init = function(itemData) {
        this.wildBornTime = GGlobal_1.default.cfg.world.quickItemBornTime;
      };
      Item.prototype.update = function(dt) {
        this.tt += dt;
        this.isTouch && this.checkCollision();
      };
      Item.prototype.checkCollision = function() {
        var _this = this;
        if (this.tt < this.wildBornTime) return;
        this.isTouch = false;
        GGlobal_1.default.data.wild_ItemPool = GGlobal_1.default.data.wild_ItemPool.filter(function(item) {
          return item !== _this.node;
        });
        this.node.removeComponent(cc.BoxCollider);
        this.node.removeComponent(cc.RigidBody);
        this.node.destroy();
        EventCenter_1.EventCenter.emit(GDefine_1.GEvent.EatQuickSpeedItem);
      };
      Item.prototype.onCollisionEnter = function(other, self) {
        if ("characterArea" === other.node.group) {
          this.isTouch = true;
          this.checkCollision();
        }
      };
      Item.prototype.onCollisionExit = function(other, self) {
        "characterArea" === other.node.group && (this.isTouch = false);
      };
      Item.prototype.onBeginContact = function(contact, selfCollider, otherConllider) {
        "walll" === otherConllider.node.group && console.log("wallwallwallwallwall");
      };
      Item = __decorate([ ccclass ], Item);
      return Item;
    }(cc.Component);
    exports.default = Item;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter"
  } ],
  KnifeCfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "acbf3bJj4RDhJs8o8YYT4jt", "KnifeCfg");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.KnifeCfg = exports.KnifeShypeType = void 0;
    var GGlobal_1 = require("../GGlobal");
    var KnifeShypeType;
    (function(KnifeShypeType) {
      KnifeShypeType[KnifeShypeType["NONE"] = 0] = "NONE";
      KnifeShypeType[KnifeShypeType["SINGLE"] = 1] = "SINGLE";
      KnifeShypeType[KnifeShypeType["DOUBLE"] = 2] = "DOUBLE";
      KnifeShypeType[KnifeShypeType["HEROKNIFE"] = 3] = "HEROKNIFE";
    })(KnifeShypeType = exports.KnifeShypeType || (exports.KnifeShypeType = {}));
    var KnifeCfg = function() {
      function KnifeCfg() {
        this.levelProp = [ {
          level: 0,
          attackValue: 0,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 0,
          upCost: 0
        }, {
          level: 1,
          attackValue: 1,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1
        }, {
          level: 2,
          attackValue: 2,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 200
        }, {
          level: 3,
          attackValue: 3,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 300
        }, {
          level: 4,
          attackValue: 4,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 400
        }, {
          level: 5,
          attackValue: 5,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 500
        }, {
          level: 6,
          attackValue: 6,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 600
        }, {
          level: 7,
          attackValue: 7,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 700
        }, {
          level: 8,
          attackValue: 8,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 800
        }, {
          level: 9,
          attackValue: 9,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 900
        }, {
          level: 10,
          attackValue: 10,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1e3
        }, {
          level: 11,
          attackValue: 11,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1100
        }, {
          level: 12,
          attackValue: 12,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1200
        }, {
          level: 13,
          attackValue: 13,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1300
        }, {
          level: 14,
          attackValue: 14,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1400
        }, {
          level: 15,
          attackValue: 15,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1500
        }, {
          level: 16,
          attackValue: 16,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1600
        }, {
          level: 17,
          attackValue: 17,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1700
        }, {
          level: 18,
          attackValue: 18,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1800
        }, {
          level: 19,
          attackValue: 19,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 1900
        }, {
          level: 20,
          attackValue: 20,
          shypeType: KnifeShypeType.SINGLE,
          picPath: "",
          knifeCount: 6,
          upCost: 2e3
        } ];
      }
      KnifeCfg.prototype.getKnifeDataByLv = function(lv) {
        var data = {
          level: 0,
          attackValue: 0,
          shypeType: KnifeShypeType.NONE,
          picPath: "",
          knifeCount: 0
        };
        Object.assign(data, this.levelProp[lv]);
        return data;
      };
      KnifeCfg.prototype.getKnifeCostByLv = function() {
        if (!GGlobal_1.default.player) return;
        if (!this.levelProp[GGlobal_1.default.player.knifeLevel + 1]) return -1;
        return this.levelProp[GGlobal_1.default.player.knifeLevel + 1].upCost;
      };
      KnifeCfg.prototype.getKnifeAttackByLv = function() {
        if (!GGlobal_1.default.player) return;
        if (!this.levelProp[GGlobal_1.default.player.knifeLevel]) return -1;
        return this.levelProp[GGlobal_1.default.player.knifeLevel].attackValue;
      };
      return KnifeCfg;
    }();
    exports.KnifeCfg = KnifeCfg;
    cc._RF.pop();
  }, {
    "../GGlobal": "GGlobal"
  } ],
  Knife: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff5c1LOlqNGy67sgml3vctj", "Knife");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var EventCenter_1 = require("../comm/EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Knife = function(_super) {
      __extends(Knife, _super);
      function Knife() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.attackValue = 0;
        _this.attackIsWild = true;
        _this.wildBornTime = 0;
        _this.tt = 0;
        _this.isTouch = false;
        return _this;
      }
      Knife.prototype.init = function(knifeData) {
        this.attackValue = knifeData.attackValue;
        this.attackIsWild = knifeData.isWild;
        this.wildBornTime = GGlobal_1.default.cfg.world.wildKnifeBornTime;
      };
      Knife.prototype.update = function(dt) {
        this.tt += dt;
        this.isTouch && this.checkCollision();
      };
      Knife.prototype.checkCollision = function() {
        var _this = this;
        if (this.tt < this.wildBornTime) return;
        this.isTouch = false;
        GGlobal_1.default.data.wild_knifePool = GGlobal_1.default.data.wild_knifePool.filter(function(item) {
          return item !== _this.node;
        });
        this.node.removeComponent(cc.BoxCollider);
        this.node.removeComponent(cc.RigidBody);
        this.node.destroy();
        EventCenter_1.EventCenter.emit(GDefine_1.GEvent.PlaySound, GDefine_1.AllAssets.music_\u62fe\u53d6\u98de\u5200\u97f3\u6548);
        EventCenter_1.EventCenter.emit(GDefine_1.GEvent.AddHeroKnife);
      };
      Knife.prototype.onCollisionEnter = function(other, self) {
        if ("characterArea" === other.node.group && this.attackIsWild) {
          this.isTouch = true;
          this.checkCollision();
        }
      };
      Knife.prototype.onCollisionExit = function(other, self) {
        "characterArea" === other.node.group && this.attackIsWild && (this.isTouch = false);
      };
      Knife.prototype.onBeginContact = function(contact, selfCollider, otherConllider) {
        "walll" === otherConllider.node.group && console.log("wallwallwallwallwall");
      };
      Knife = __decorate([ ccclass ], Knife);
      return Knife;
    }(cc.Component);
    exports.default = Knife;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter"
  } ],
  LevelCfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d75ea8Kz1BOKLzqUznNrg6J", "LevelCfg");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LevelCfg = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LevelCfg = function() {
      function LevelCfg() {
        this.levelData = [ {
          enemyTab: []
        }, {
          enemyTab: [ {
            HP: 20,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10, 20 ],
            ScaleByRank: [ .8, 1 ],
            colorByRank: [ cc.Color.YELLOW, cc.Color.GREEN ]
          } ]
        }, {
          enemyTab: [ {
            HP: 1,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 2,
            pos_born: {
              x: -150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 4,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 5,
            pos_born: {
              x: 150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: 150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          } ]
        }, {
          enemyTab: [ {
            HP: 1,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 2,
            pos_born: {
              x: -150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 4,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 5,
            pos_born: {
              x: 150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: 150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          } ]
        }, {
          enemyTab: [ {
            HP: 1,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 2,
            pos_born: {
              x: -150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 4,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 5,
            pos_born: {
              x: 150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: 150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          } ]
        }, {
          enemyTab: [ {
            HP: 30,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10, 20, 30 ],
            ScaleByRank: [ .8, 1, 1.1 ],
            colorByRank: [ cc.Color.YELLOW, cc.Color.GREEN, cc.Color.RED ]
          }, {
            HP: 1,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 2,
            pos_born: {
              x: -150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 4,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 5,
            pos_born: {
              x: 150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: 150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          } ]
        }, {
          enemyTab: [ {
            HP: 1,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 2,
            pos_born: {
              x: -150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 4,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 5,
            pos_born: {
              x: 150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: 150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          } ]
        }, {
          enemyTab: [ {
            HP: 1,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 2,
            pos_born: {
              x: -150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 4,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 5,
            pos_born: {
              x: 150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: 150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          } ]
        }, {
          enemyTab: [ {
            HP: 1,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 2,
            pos_born: {
              x: -150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 4,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 5,
            pos_born: {
              x: 150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: 150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          } ]
        }, {
          enemyTab: [ {
            HP: 1,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 2,
            pos_born: {
              x: -150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 4,
            pos_born: {
              x: -0,
              y: 100
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 5,
            pos_born: {
              x: 150,
              y: 400
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          }, {
            HP: 3,
            pos_born: {
              x: 150,
              y: 250
            },
            Rank: [ 10 ],
            ScaleByRank: [ 1 ],
            colorByRank: [ cc.Color.YELLOW ]
          } ]
        }, {
          enemyTab: [ {
            HP: 20,
            pos_born: {
              x: -150,
              y: 400
            },
            Rank: [ 10, 20 ],
            ScaleByRank: [ 1, 1 ],
            colorByRank: [ cc.Color.YELLOW, cc.Color.GREEN ]
          } ]
        } ];
      }
      LevelCfg.prototype.getLevelEnemyDataByLevel = function(lv) {
        var tmp = [];
        Object.assign(tmp, this.levelData[lv].enemyTab);
        return tmp;
      };
      LevelCfg.prototype.getLevelEnemyCountByLevel = function(lv) {
        var count = this.levelData[lv].enemyTab.length;
        return count;
      };
      LevelCfg.prototype.getMaxLevelValue = function() {
        var count = this.levelData.length;
        return count;
      };
      return LevelCfg;
    }();
    exports.LevelCfg = LevelCfg;
    cc._RF.pop();
  }, {} ],
  Level_1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3967cAbVdlFg67rf4rf5EIL", "Level_1");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GGlobal_1 = require("../GGlobal");
    var BaseLevel_1 = require("./BaseLevel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var level_1 = function(_super) {
      __extends(level_1, _super);
      function level_1() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.levelData = {
          enemyTab: [],
          heroTab: {
            level: [],
            heroId: 0,
            heroPic: ""
          }
        };
        return _this;
      }
      level_1.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        var data = this.createLevelData();
        this.initLevel(data);
        this.initCollider();
      };
      level_1.prototype.start = function() {
        _super.prototype.start.call(this);
      };
      level_1.prototype.onDisable = function() {
        _super.prototype.onDisable.call(this);
        this.levelData = {
          enemyTab: [],
          heroTab: {
            level: [],
            heroId: 0,
            heroPic: ""
          }
        };
      };
      level_1.prototype.createLevelData = function() {
        this.levelData.enemyTab = GGlobal_1.default.cfg.level.getLevelEnemyDataByLevel(GGlobal_1.default.data.curLevelId);
        this.levelData.heroTab = GGlobal_1.default.cfg.hero.getHeroData(GGlobal_1.default.player.curtHeroId, GGlobal_1.default.player.getCurtHeroLv(), GGlobal_1.default.player.knifeLevel);
        console.log(this.levelData.heroTab);
        return this.levelData;
      };
      level_1 = __decorate([ ccclass ], level_1);
      return level_1;
    }(BaseLevel_1.default);
    exports.default = level_1;
    cc._RF.pop();
  }, {
    "../GGlobal": "GGlobal",
    "./BaseLevel": "BaseLevel"
  } ],
  Level: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16873WopoBOHLBvOZr2q43m", "Level");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Level = function(_super) {
      __extends(Level, _super);
      function Level() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.sprite = null;
        _this.boss = null;
        _this.jiantou = null;
        _this.denghao = null;
        return _this;
      }
      Level.prototype.onLoad = function() {};
      Level.prototype.init = function(LevelData) {
        var _this = this;
        this.LevelData = LevelData;
        this.isInGame = LevelData.isInGame;
        this.id = LevelData.id;
        if (!LevelData.isInGame && LevelData.isBoss) {
          this.label.node.active = false;
          this.boss.active = true;
        }
        this.label.string = LevelData.level.toString();
        GGlobal_1.default.asset.preload(LevelData.spriteDi, function(pic) {
          pic && pic instanceof cc.SpriteFrame && (_this.sprite.spriteFrame = pic);
        });
        LevelData.level <= 0 && (this.node.opacity = 0);
        this.isInGame && this.updateImageInGame();
        !this.isInGame && this.updateImageInLobby();
      };
      Level.prototype.updateImageInLobby = function(LevelData) {
        switch (this.id) {
         case -2:
         case -1:
          this.node.scale = .8;
          break;

         case 0:
          this.node.scale = 1;
          break;

         case 1:
         case 2:
          this.node.scale = .8;
        }
      };
      Level.prototype.updateImageInGame = function(LevelData) {
        switch (this.id) {
         case -2:
         case -1:
          this.node.opacity = 0;
          break;

         case 0:
          this.node.scale = .8;
          break;

         case 1:
          this.node.scale = 1;
          break;

         case 2:
          this.node.opacity = 255;
          this.node.scale = .8;
          break;

         case 3:
          this.node.opacity = 0;
        }
      };
      Level.prototype.move = function() {
        var _this = this;
        var Infos = this.getInfosbyId(this.id);
        cc.tween(this.node).call(function() {
          _this.jiantou.active = Infos.isShow;
          _this.denghao.active = Infos.isShow;
        }).to(.5, {
          x: this.node.x + Infos.x_offset,
          scale: Infos.scale,
          opacity: Infos.opacity
        }).start();
      };
      Level.prototype.getInfosbyId = function(id) {
        var infos = {
          x_offset: -100,
          scale: 1,
          isShow: false,
          opacity: 255
        };
        switch (id - 1) {
         case -2:
         case -1:
          infos.opacity = 0;
          break;

         case 0:
          infos.scale = .8;
          break;

         case 1:
          infos.scale = 1;
          break;

         case 2:
          this.node.opacity = 255;
          infos.scale = .8;
          break;

         case 3:
          infos.opacity = 0;
        }
        return infos;
      };
      __decorate([ property(cc.Label) ], Level.prototype, "label", void 0);
      __decorate([ property(cc.Sprite) ], Level.prototype, "sprite", void 0);
      __decorate([ property(cc.Node) ], Level.prototype, "boss", void 0);
      __decorate([ property(cc.Node) ], Level.prototype, "jiantou", void 0);
      __decorate([ property(cc.Node) ], Level.prototype, "denghao", void 0);
      Level = __decorate([ ccclass ], Level);
      return Level;
    }(cc.Component);
    exports.default = Level;
    cc._RF.pop();
  }, {
    "../GGlobal": "GGlobal"
  } ],
  LobbyScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2032dL5DHZK2YMVpnym1uQ2", "LobbyScene");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("../../script/comm/EventCenter");
    var GDefine_1 = require("../../script/GDefine");
    var GGlobal_1 = require("../../script/GGlobal");
    var EffectMgr_1 = require("../effect/EffectMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LobbyScene = function(_super) {
      __extends(LobbyScene, _super);
      function LobbyScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.effectMgr = null;
        return _this;
      }
      LobbyScene.prototype.onLoad = function() {
        this.effectMgr = new EffectMgr_1.EffectMgr();
        GGlobal_1.default.lobby = this;
        GGlobal_1.default.data.state = GDefine_1.GameState.NONE;
        GGlobal_1.default.asset.preload(GDefine_1.AllAssets.music_\u5927\u5385\u80cc\u666f\u97f3\u6548, function(res) {
          if (res && res instanceof cc.AudioClip) {
            GGlobal_1.default.audio.updateClips([ res ]);
            GGlobal_1.default.audio.playMusic(0);
          }
        });
      };
      LobbyScene.prototype.start = function() {
        GGlobal_1.default.asset.lobbyPreload();
        GGlobal_1.default.asset.gamePreload();
      };
      LobbyScene.prototype.onEnable = function() {
        this.effectMgr.addListener();
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.ClickStartGame, this.onClickStartGame, this);
      };
      LobbyScene.prototype.onDisable = function() {
        this.effectMgr.removeListener();
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.ClickStartGame, this.onClickStartGame, this);
      };
      LobbyScene.prototype.onClickStartGame = function() {
        cc.director.loadScene(GDefine_1.GScene.game);
      };
      LobbyScene.prototype.preload = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, GGlobal_1.default.asset.lobbyPreload() ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      LobbyScene = __decorate([ ccclass ], LobbyScene);
      return LobbyScene;
    }(cc.Component);
    exports.default = LobbyScene;
    cc._RF.pop();
  }, {
    "../../script/GDefine": "GDefine",
    "../../script/GGlobal": "GGlobal",
    "../../script/comm/EventCenter": "EventCenter",
    "../effect/EffectMgr": "EffectMgr"
  } ],
  LobbyUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2875aNFbcRHfI+39UC97nsZ", "LobbyUI");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("../comm/EventCenter");
    var Hero_1 = require("../node/Hero");
    var UtilFunc_1 = require("../comm/UtilFunc");
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var Level_1 = require("../node/Level");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LobbyUI = function(_super) {
      __extends(LobbyUI, _super);
      function LobbyUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameFront = null;
        _this.moneyCopy = null;
        _this.upgradeLayer = null;
        _this.settingLayer = null;
        _this.heroLayer = null;
        _this.blackLayer = null;
        _this.enerygyLayer = null;
        _this.subenergylayer = null;
        _this.money = null;
        _this.energy = null;
        _this.heroNode = null;
        _this.isAction = false;
        _this.hero = null;
        _this.setBtn = null;
        _this.levelNode = null;
        _this.offlineWage = null;
        _this.sevenSign = null;
        _this.addEnergyBtn = null;
        _this.logo = null;
        _this.startGame = null;
        _this.upgradeKnife = null;
        _this.upgradeHero = null;
        _this.moneyNode = null;
        _this.energyNode = null;
        _this.nodePosTab = [];
        return _this;
      }
      LobbyUI.prototype.onEnable = function() {
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.UpdateLobbyMoneyCount, this.updateMoneyCount, this);
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.UpdateLobbyEnergyCount, this.updateEnergyCount, this);
        GGlobal_1.default.lobby.preload();
      };
      LobbyUI.prototype.onDisable = function() {
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.UpdateLobbyMoneyCount, this.updateMoneyCount, this);
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.UpdateLobbyEnergyCount, this.updateEnergyCount, this);
      };
      LobbyUI.prototype.onLoad = function() {
        this.init();
        this.initLayer();
        this.checkUnnissuedMoney();
        this.createHero();
        this.createLevel();
      };
      LobbyUI.prototype.init = function() {
        var Canvas = cc.director.getScene().getChildByName("Canvas");
        this.money = cc.find("LobbyUI/front/moneyNode/money", Canvas).getComponent(cc.Label);
        this.energy = cc.find("LobbyUI/front/energyNode/energy", Canvas).getComponent(cc.Label);
      };
      LobbyUI.prototype.initLayer = function() {
        this.updateMoneyCount();
        this.updateEnergyCount();
        cc.find("upgrade_guang/upgrade_guang", this.upgradeKnife).getComponent(cc.Animation).play();
        cc.find("upgrade_guang/upgrade_guang", this.upgradeHero).getComponent(cc.Animation).play();
        this.setBtn = cc.find("front/setBtn", this.node);
        this.levelNode = cc.find("front/levelNode", this.node);
        this.offlineWage = cc.find("front/offlineWage", this.node);
        this.sevenSign = cc.find("front/sevenSign", this.node);
        this.addEnergyBtn = cc.find("front/addEnergyBtn", this.node);
        this.logo = cc.find("front/logo", this.node);
        this.moneyNode = cc.find("front/moneyNode", this.node);
        this.energyNode = cc.find("front/energyNode", this.node);
      };
      LobbyUI.prototype.updateUpgradeState = function() {
        -1 !== GGlobal_1.default.cfg.knife.getKnifeCostByLv() && GGlobal_1.default.player.money >= GGlobal_1.default.cfg.knife.getKnifeCostByLv() ? cc.find("upgrade_guang", this.upgradeKnife).active = true : cc.find("upgrade_guang", this.upgradeKnife).active = false;
        -1 !== GGlobal_1.default.cfg.hero.getUpHeroCost() && GGlobal_1.default.player.money >= GGlobal_1.default.cfg.hero.getUpHeroCost() ? cc.find("upgrade_guang", this.upgradeHero).active = true : cc.find("upgrade_guang", this.upgradeHero).active = false;
      };
      LobbyUI.prototype.updateMoneyCount = function() {
        this.money.string = GGlobal_1.default.data.getHpValueString(GGlobal_1.default.player.money - (GGlobal_1.default.data.unissuedMoney || 0)).toString();
        this.updateUpgradeState();
      };
      LobbyUI.prototype.updateEnergyCount = function() {
        var count = GGlobal_1.default.player.energy;
        this.energy.string = GGlobal_1.default.data.getHpValueString(count).toString();
      };
      LobbyUI.prototype.runAddMoneyAction = function(onComplete) {
        var moneyIconPos = this.money.node.parent.position;
        var moneyIconCopy = cc.instantiate(this.moneyCopy);
        var count = 15;
        var index = 0;
        for (var i = 0; i < count; i++) {
          var n = cc.instantiate(moneyIconCopy);
          n.setParent(this.gameFront);
          n.setPosition(cc.v2(300 * Math.random() - 150, 300 * Math.random() - 150));
          n.getComponent(cc.Animation).play();
          cc.tween(n).delay(.5).to(.5, {
            position: moneyIconPos
          }).call(function() {
            ++index == count && onComplete();
          }).removeSelf().union().start();
        }
      };
      LobbyUI.prototype.createHero = function() {
        return __awaiter(this, void 0, void 0, function() {
          var fab, n, heroSrc, heroData;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.hero && this.hero.destroy();
              return [ 4, UtilFunc_1.LoadRes("prefab_node/heroNode", cc.Prefab) ];

             case 1:
              fab = _a.sent();
              n = cc.instantiate(fab);
              n.setParent(this.heroLayer);
              n.setPosition(0, 0);
              heroSrc = n.getComponent(Hero_1.default);
              heroData = GGlobal_1.default.cfg.hero.getHeroData(GGlobal_1.default.player.curtHeroId, GGlobal_1.default.player.getCurtHeroLv(), GGlobal_1.default.player.knifeLevel);
              heroSrc.init(heroData);
              this.hero = n;
              this.isAction && (this.hero.active = false);
              return [ 2 ];
            }
          });
        });
      };
      LobbyUI.prototype.checkUnnissuedMoney = function() {
        var _this = this;
        if (0 !== GGlobal_1.default.data.unissuedMoney) {
          this.isAction = true;
          this.hero && (this.hero.active = false);
          this.setGoInAction();
          this.runAddMoneyAction(function() {
            _this.isAction = false;
            GGlobal_1.default.data.unissuedMoney = 0;
            _this.updateMoneyCount();
            _this.runGoInAction();
            _this.hero && (_this.hero.active = true);
          });
          return;
        }
        this.setGoInAction();
        this.runGoInAction();
      };
      LobbyUI.prototype.moveNode = function(node, time, toInfo, onComplete) {
        cc.tween(node).to(time, toInfo).call(function() {
          onComplete && onComplete();
        }).union().start();
      };
      LobbyUI.prototype.onCloseUpgradeClick = function() {
        this.moveNode(this.upgradeHero, .2, {
          y: -660
        });
        this.moveNode(this.upgradeKnife, .2, {
          y: -660
        });
        this.hideUpgradeLayer();
      };
      LobbyUI.prototype.onUpgradeHeroClick = function() {
        if (this.isAction) return;
        this.moveNode(this.upgradeHero, .2, {
          y: -570
        });
        this.moveNode(this.upgradeKnife, .2, {
          y: -660
        });
        this.showUpgradeLayer("hero");
      };
      LobbyUI.prototype.onUpgradeKnifeClick = function() {
        if (this.isAction) return;
        this.moveNode(this.upgradeHero, .2, {
          y: -660
        });
        this.moveNode(this.upgradeKnife, .2, {
          y: -570
        });
        this.showUpgradeLayer("knife");
      };
      LobbyUI.prototype.showUpgradeLayer = function(name) {
        var _this = this;
        var n = null;
        this.isAction = true;
        var func = function() {
          _this.isAction = false;
        };
        switch (name) {
         case "hero":
          this.upgradeLayer.active = true;
          n = this.upgradeLayer.getChildByName("hero");
          this.moveNode(n, .2, {
            x: 0,
            scale: 1
          }, func);
          this.upgradeLayer.getChildByName("knife").setScale(.2);
          this.upgradeLayer.getChildByName("knife").setPosition(-700, -150);
          break;

         case "knife":
          this.upgradeLayer.active = true;
          n = this.upgradeLayer.getChildByName("knife");
          this.moveNode(n, .2, {
            x: 0,
            scale: 1
          }, func);
          this.upgradeLayer.getChildByName("hero").setScale(.2);
          this.upgradeLayer.getChildByName("hero").setPosition(-700, -150);
        }
      };
      LobbyUI.prototype.hideUpgradeLayer = function() {
        var _this = this;
        if (this.isAction) return;
        this.isAction = true;
        this.upgradeLayer.getChildByName("hero").setScale(.2);
        this.upgradeLayer.getChildByName("hero").setPosition(-700, -150);
        this.upgradeLayer.getChildByName("knife").setScale(.2);
        this.upgradeLayer.getChildByName("knife").setPosition(-700, -150);
        this.heroNode && this.moveNode(this.heroNode, .5, {
          y: 0
        }, function() {
          _this.upgradeLayer.active = false;
          _this.isAction = false;
        });
        this.scheduleOnce(function() {
          _this.upgradeLayer.active = false;
          _this.isAction = false;
        }, 0);
      };
      LobbyUI.prototype.createLevel = function() {
        for (var i = -2; i < 3; i++) {
          var levelData = {
            level: GGlobal_1.default.player.levelID + i + 1,
            spriteDi: 0 == i && GDefine_1.AllAssets.level_di_2 || GDefine_1.AllAssets.level_di_1,
            isBoss: (GGlobal_1.default.player.levelID + i + 1) % 10 == 0 && 0 !== GGlobal_1.default.player.levelID,
            isInGame: false,
            id: i
          };
          this.createLevelNode(levelData, i);
        }
      };
      LobbyUI.prototype.createLevelNode = function(levelData, index) {
        return __awaiter(this, void 0, void 0, function() {
          var level_di, fab, n;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              level_di = cc.find("front/levelNode/di", this.node);
              return [ 4, UtilFunc_1.LoadRes("prefab_node/levelNode", cc.Prefab) ];

             case 1:
              fab = _a.sent();
              n = cc.instantiate(fab);
              n.setParent(level_di);
              n.getComponent(Level_1.default).init(levelData);
              n.setPosition(100 * index, 0);
              return [ 2 ];
            }
          });
        });
      };
      LobbyUI.prototype.onStartGame = function() {
        var _this = this;
        var count = 8;
        var index = 0;
        var func = function() {
          if (++index !== count) return;
          var f = function() {
            _this.blackLayer.active = true;
            cc.tween(_this.blackLayer).to(.2, {
              opacity: 255
            }).call(function() {
              EventCenter_1.EventCenter.emit(GDefine_1.GEvent.ClickStartGame);
            }).start();
          };
          _this.onOpenSubEnergyLayer();
          _this.moveNode(_this.hero, .5, {
            y: 1200
          }, f);
        };
        if (!this.checkIsHaveEnoughEnergy()) {
          this.onOpenAddEnergyLayer();
          return;
        }
        GGlobal_1.default.player.energy -= GGlobal_1.default.cfg.world.playUseEnergyCount;
        this.runStartAction(func);
      };
      LobbyUI.prototype.checkIsHaveEnoughEnergy = function() {
        if (GGlobal_1.default.player.energy >= GGlobal_1.default.cfg.world.playUseEnergyCount) return true;
        return false;
      };
      LobbyUI.prototype.runStartAction = function(func) {
        this.startGame.active = false;
        this.moveNode(this.setBtn, .2, {
          y: this.setBtn.y - 20
        });
        this.moveNode(this.levelNode, .2, {
          y: this.setBtn.y - 20
        });
        this.moveNode(this.offlineWage, .2, {
          x: this.offlineWage.x - 20
        });
        this.moveNode(this.sevenSign, .2, {
          x: this.sevenSign.x - 20
        });
        this.moveNode(this.addEnergyBtn, .2, {
          x: this.addEnergyBtn.x - 20
        });
        this.moveNode(this.logo, .2, {
          y: this.setBtn.y - 20
        });
        this.moveNode(this.upgradeKnife, .2, {
          y: this.setBtn.y + 20
        });
        this.moveNode(this.upgradeHero, .2, {
          y: this.setBtn.y + 20
        });
        this.moveNode(this.moneyNode, .2, {
          y: this.setBtn.y - 20
        });
        this.moveNode(this.energyNode, .2, {
          y: this.setBtn.y - 20
        });
        this.moveNode(this.setBtn, .2, {
          y: this.setBtn.y + 2e3
        }, func);
        this.moveNode(this.levelNode, .2, {
          y: this.setBtn.y + 2220
        }, func);
        this.moveNode(this.offlineWage, .2, {
          x: this.offlineWage.x + 2220
        }, func);
        this.moveNode(this.sevenSign, .2, {
          x: this.sevenSign.x + 2220
        }, func);
        this.moveNode(this.addEnergyBtn, .2, {
          x: this.addEnergyBtn.x + 2220
        }, func);
        this.moveNode(this.logo, .2, {
          y: this.setBtn.y + 2220
        }, func);
        this.moveNode(this.upgradeKnife, .2, {
          y: this.setBtn.y - 2220
        }, func);
        this.moveNode(this.upgradeHero, .2, {
          y: this.setBtn.y - 2220
        }, func);
        this.moveNode(this.moneyNode, .2, {
          y: this.setBtn.y + 2220
        }, func);
        this.moveNode(this.energyNode, .2, {
          y: this.setBtn.y + 2220
        }, func);
      };
      LobbyUI.prototype.setGoInAction = function() {
        this.startGame.active = false;
        this.nodePosTab["setBtn_pos"] = this.setBtn.position;
        this.setBtn.setPosition(this.nodePosTab["setBtn_pos"].x, this.nodePosTab["setBtn_pos"].y + 2e3);
        this.nodePosTab["levelNode_pos"] = this.levelNode.position;
        this.levelNode.setPosition(this.nodePosTab["levelNode_pos"].x, this.nodePosTab["levelNode_pos"].y + 2e3);
        this.nodePosTab["offlineWage_pos"] = this.offlineWage.position;
        this.offlineWage.setPosition(this.nodePosTab["offlineWage_pos"].x + 2e3, this.nodePosTab["offlineWage_pos"].y);
        this.nodePosTab["sevenSign_pos"] = this.sevenSign.position;
        this.sevenSign.setPosition(this.nodePosTab["sevenSign_pos"].x + 2e3, this.nodePosTab["sevenSign_pos"].y);
        this.nodePosTab["addEnergyBtn_pos"] = this.addEnergyBtn.position;
        this.addEnergyBtn.setPosition(this.nodePosTab["addEnergyBtn_pos"].x + 2e3, this.nodePosTab["addEnergyBtn_pos"].y);
        this.nodePosTab["logo_pos"] = this.logo.position;
        this.logo.setPosition(this.nodePosTab["logo_pos"].x, this.nodePosTab["logo_pos"].y + 2e3);
        this.nodePosTab["upgradeKnife_pos"] = this.upgradeKnife.position;
        this.upgradeKnife.setPosition(this.nodePosTab["upgradeKnife_pos"].x, this.nodePosTab["upgradeKnife_pos"].y - 2e3);
        this.nodePosTab["upgradeHero_pos"] = this.upgradeHero.position;
        this.upgradeHero.setPosition(this.nodePosTab["upgradeHero_pos"].x, this.nodePosTab["upgradeHero_pos"].y - 2e3);
        this.nodePosTab["moneyNode_pos"] = this.moneyNode.position;
        this.moneyNode.setPosition(this.nodePosTab["moneyNode_pos"].x, this.nodePosTab["moneyNode_pos"].y + 2e3);
        this.nodePosTab["energyNode_pos"] = this.energyNode.position;
        this.energyNode.setPosition(this.nodePosTab["energyNode_pos"].x, this.nodePosTab["energyNode_pos"].y + 2e3);
      };
      LobbyUI.prototype.runGoInAction = function() {
        this.moveNode(this.setBtn, .2, {
          position: this.nodePosTab["setBtn_pos"]
        });
        this.moveNode(this.levelNode, .2, {
          position: this.nodePosTab["levelNode_pos"]
        });
        this.moveNode(this.offlineWage, .2, {
          position: this.nodePosTab["offlineWage_pos"]
        });
        this.moveNode(this.sevenSign, .2, {
          position: this.nodePosTab["sevenSign_pos"]
        });
        this.moveNode(this.addEnergyBtn, .2, {
          position: this.nodePosTab["addEnergyBtn_pos"]
        });
        this.moveNode(this.logo, .2, {
          position: this.nodePosTab["logo_pos"]
        });
        this.moveNode(this.upgradeKnife, .2, {
          position: this.nodePosTab["upgradeKnife_pos"]
        });
        this.moveNode(this.upgradeHero, .2, {
          position: this.nodePosTab["upgradeHero_pos"]
        });
        this.moveNode(this.moneyNode, .2, {
          position: this.nodePosTab["moneyNode_pos"]
        });
        this.moveNode(this.energyNode, .2, {
          position: this.nodePosTab["energyNode_pos"]
        });
        cc.tween(this.startGame).delay(.2).set({
          active: true
        }).start();
      };
      LobbyUI.prototype.onOpenSettingLayer = function() {
        this.settingLayer.active = true;
      };
      LobbyUI.prototype.onOpenAddEnergyLayer = function() {
        this.enerygyLayer.active = true;
      };
      LobbyUI.prototype.onOpenSubEnergyLayer = function() {
        this.subenergylayer.active = true;
      };
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "gameFront", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "moneyCopy", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "upgradeLayer", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "settingLayer", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "heroLayer", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "blackLayer", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "enerygyLayer", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "subenergylayer", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "startGame", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "upgradeKnife", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "upgradeHero", void 0);
      LobbyUI = __decorate([ ccclass ], LobbyUI);
      return LobbyUI;
    }(cc.Component);
    exports.default = LobbyUI;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter",
    "../comm/UtilFunc": "UtilFunc",
    "../node/Hero": "Hero",
    "../node/Level": "Level"
  } ],
  ObjectPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed5d24QS0FGQ4EsDSUtiuWg", "ObjectPool");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ObjectPool = void 0;
    var ObjectPool = function() {
      function ObjectPool() {
        this._poolDic = {};
        this._poolDicCreateFun = {};
        this.POOLSIGN = "__InPool";
        this._CLSID = 1;
      }
      ObjectPool.prototype.getPoolBySign = function(sign) {
        return this._poolDic[sign] || (this._poolDic[sign] = []);
      };
      ObjectPool.prototype.clearBySign = function(sign) {
        this._poolDic[sign] && (this._poolDic[sign].length = 0);
        this._poolDicCreateFun[sign] && delete this._poolDicCreateFun[sign];
      };
      ObjectPool.prototype.recover = function(sign, item) {
        if (item[this.POOLSIGN]) return;
        item[this.POOLSIGN] = true;
        this.getPoolBySign(sign).push(item);
      };
      ObjectPool.prototype.recoverByClass = function(instance) {
        if (instance) {
          var className = instance["__className"] || instance.constructor["_$gid"];
          className && this.recover(className, instance);
        }
      };
      ObjectPool.prototype._getClassSign = function(cla) {
        var className = cla["__className"] || cla["_$gid"];
        if (!className) {
          cla["_$gid"] = className = this._CLSID + "";
          this._CLSID++;
        }
        return className;
      };
      ObjectPool.prototype.createByClass = function(cls) {
        return this.getItemByClass(this._getClassSign(cls), cls);
      };
      ObjectPool.prototype.registerItemByClass = function(sign, cls) {
        this.registerItemByCreateFun(sign, function() {
          return new cls();
        });
      };
      ObjectPool.prototype.getItemByClass = function(sign, cls) {
        this._poolDicCreateFun[sign] || this.registerItemByClass(sign, cls);
        if (!this._poolDic[sign]) return new cls();
        var pool = this.getPoolBySign(sign);
        var rst;
        if (pool.length) {
          rst = pool.pop();
          rst[this.POOLSIGN] = false;
        } else rst = new cls();
        return rst;
      };
      ObjectPool.prototype.registerItemByCreateFun = function(sign, createFun, caller) {
        var last = this._poolDicCreateFun[sign];
        if (last && last.createFun === createFun && last.caller === caller) return;
        this._poolDicCreateFun[sign] = {
          createFun: createFun,
          caller: caller
        };
        last && console.log("\u5bf9\u8c61\u6c60\u66f4\u6539\u6ce8\u518c\u7684\u521b\u5efa\u65b9\u6cd5\uff1a", sign, last);
        return last;
      };
      ObjectPool.prototype.getItemByCreateFun = function(sign, createFun, caller) {
        this.registerItemByCreateFun(sign, createFun, caller);
        var pool = this.getPoolBySign(sign);
        var rst = pool.length ? pool.pop() : createFun.call(caller);
        rst[this.POOLSIGN] = false;
        return rst;
      };
      ObjectPool.prototype.getItem = function(sign) {
        if (!sign) return;
        if ("function" === typeof sign) return this.createByClass(sign);
        var pool = this.getPoolBySign(sign);
        var rst = pool.length ? pool.pop() : null;
        if (rst) {
          rst[this.POOLSIGN] = false;
          return rst;
        }
        var create = this._poolDicCreateFun[sign];
        if (!create) return;
        return create.createFun.call(create.caller);
      };
      return ObjectPool;
    }();
    exports.ObjectPool = ObjectPool;
    cc._RF.pop();
  }, {} ],
  SceneAssets: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa451XnQLtF9oXy0mJmN0N2", "SceneAssets");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadAssetDic = function() {
      function LoadAssetDic() {
        this.type = GDefine_1.AllAssets.none;
        this.asset = null;
      }
      __decorate([ property({
        type: cc.Enum(GDefine_1.AllAssets)
      }) ], LoadAssetDic.prototype, "type", void 0);
      __decorate([ property({
        type: cc.Asset
      }) ], LoadAssetDic.prototype, "asset", void 0);
      LoadAssetDic = __decorate([ ccclass("LoadAssetDic") ], LoadAssetDic);
      return LoadAssetDic;
    }();
    var SceneAssets = function(_super) {
      __extends(SceneAssets, _super);
      function SceneAssets() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadAssets = [];
        return _this;
      }
      SceneAssets.prototype.onLoad = function() {
        for (var i = 0, len = this.loadAssets.length; i < len; i++) {
          var item = this.loadAssets[i];
          if (!item) continue;
          if (!item.asset) continue;
          GGlobal_1.default.asset.setAsset(item.type, item.asset);
        }
      };
      __decorate([ property({
        type: [ LoadAssetDic ]
      }) ], SceneAssets.prototype, "loadAssets", void 0);
      SceneAssets = __decorate([ ccclass ], SceneAssets);
      return SceneAssets;
    }(cc.Component);
    exports.default = SceneAssets;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal"
  } ],
  SettingMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2da30+c3AlFx6bxhD3W/wMU", "SettingMgr");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SettingMgr = void 0;
    var KEY = "GSetting";
    var SettingMgr = function() {
      function SettingMgr() {
        this.audio = true;
        this.vibrate = true;
      }
      SettingMgr.prototype.read = function() {
        try {
          var v = cc.sys.localStorage.getItem(KEY);
          v && Object.assign(this, JSON.parse(v));
        } catch (error) {}
      };
      SettingMgr.prototype.write = function() {
        console.log("setting write");
        cc.sys.localStorage.setItem(KEY, JSON.stringify(this));
      };
      return SettingMgr;
    }();
    exports.SettingMgr = SettingMgr;
    cc._RF.pop();
  }, {} ],
  SettingUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50d0ce0uNdEt6xRe+HeibGr", "SettingUI");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.close = null;
        _this.audio_open = null;
        _this.audio_close = null;
        _this.vibrate_open = null;
        _this.vibrate_close = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.updateBtnState();
      };
      NewClass.prototype.onClose = function() {
        this.node.active = false;
      };
      NewClass.prototype.onAudioClick = function() {
        GGlobal_1.default.setting.audio = !GGlobal_1.default.setting.audio;
        this.updateBtnState();
        GGlobal_1.default.setting.write();
        GGlobal_1.default.setting.audio ? GGlobal_1.default.audio.playMusic(0) : GGlobal_1.default.audio.stopMusic();
      };
      NewClass.prototype.onVibrateClick = function() {
        GGlobal_1.default.setting.vibrate = !GGlobal_1.default.setting.vibrate;
        this.updateBtnState();
        GGlobal_1.default.setting.write();
      };
      NewClass.prototype.updateBtnState = function() {
        this.audio_open.active = GGlobal_1.default.setting.audio;
        this.audio_close.active = !GGlobal_1.default.setting.audio;
        this.vibrate_open.active = GGlobal_1.default.setting.vibrate;
        this.vibrate_close.active = !GGlobal_1.default.setting.vibrate;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "close", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "audio_open", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "audio_close", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "vibrate_open", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "vibrate_close", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../GGlobal": "GGlobal"
  } ],
  Shake: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "773e9zvA5lMxKESGnqcufCj", "Shake");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Shake = function(_super) {
      __extends(Shake, _super);
      function Shake() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shake = 0;
        _this.cameraOffset = 1;
        _this.shakeStrength = 500;
        _this.main_camera = cc.v2();
        _this.isShake = false;
        return _this;
      }
      Shake.prototype.onLoad = function() {
        this.node.getPosition(this.main_camera);
      };
      Shake.prototype.lateUpdate = function(dt) {
        if (this.shake <= 0) {
          if (this.isShake) {
            this.node.setPosition(this.main_camera);
            this.isShake = false;
          }
        } else {
          this.isShake = true;
          this.shake -= dt;
          var random = Math.random() * this.shakeStrength;
          var randomEurl = Math.random() * Math.PI * 2;
          var x = random * Math.cos(randomEurl);
          var y = random * Math.sin(randomEurl);
          this.node.setPosition(this.main_camera.x + x, this.main_camera.y + y);
        }
      };
      __decorate([ property({
        type: Number
      }) ], Shake.prototype, "cameraOffset", void 0);
      __decorate([ property({
        type: Number
      }) ], Shake.prototype, "shakeStrength", void 0);
      Shake = __decorate([ ccclass ], Shake);
      return Shake;
    }(cc.Component);
    exports.default = Shake;
    cc._RF.pop();
  }, {} ],
  StartScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "474f5ey+ZRGA4E3UKDDYyee", "StartScene");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("../../script/comm/EventCenter");
    var GDefine_1 = require("../../script/GDefine");
    var GStarter_1 = require("../../script/GStarter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StartScene = function(_super) {
      __extends(StartScene, _super);
      function StartScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pgr = null;
        _this.tip = null;
        _this.pgrCount = null;
        _this.logo = null;
        _this.logodi = null;
        _this.toon = null;
        _this.loadLobby = false;
        return _this;
      }
      Object.defineProperty(StartScene.prototype, "showingToon", {
        get: function() {
          if (!this.toon) return false;
          return this.toon.active;
        },
        enumerable: false,
        configurable: true
      });
      StartScene.prototype.start = function() {
        GStarter_1.GStarter.instance.start();
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.onCartoonClosed, this.onCloseCartoon, this);
        this.startLogoAction();
      };
      StartScene.prototype.onDestroy = function() {
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.onCartoonClosed, this.onCloseCartoon, this);
      };
      StartScene.prototype.update = function(dt) {
        var starter = GStarter_1.GStarter.instance;
        if (!this.loadLobby && starter.completed && !this.showingToon && this.pgr.progress >= .99) {
          this.pgr.progress = 1;
          starter.loadLobby();
          this.loadLobby = true;
        }
        !this.toon && starter.cartoon && this.showCartoon(starter.cartoon);
        this.pgr.progress = cc.misc.lerp(this.pgr.progress, GStarter_1.GStarter.instance.progress, 5 * dt);
        this.pgrCount.string = (100 * cc.misc.lerp(this.pgr.progress, GStarter_1.GStarter.instance.progress, 5 * dt)).toPrecision(3) + "%";
        this.tip.string = starter.tip;
      };
      StartScene.prototype.showCartoon = function(fab) {
        if (this.toon) {
          this.toon.active = true;
          return;
        }
        this.toon = cc.instantiate(fab);
        this.toon.setParent(cc.find("Canvas"));
      };
      StartScene.prototype.onCloseCartoon = function() {
        this.toon.active = false;
      };
      StartScene.prototype.startLogoAction = function() {
        cc.tween(this.logo).to(.5, {
          angle: 180,
          y: 150
        }).to(.5, {
          angle: 360,
          y: 35
        }).delay(.5).to(.5, {
          angle: 180,
          y: 150
        }).to(.5, {
          angle: 0,
          y: 35
        }).delay(.5).union().repeatForever().start();
        cc.tween(this.logodi).to(.5, {
          scale: .7
        }).to(.5, {
          scale: 1
        }).delay(.5).union().repeatForever().start();
      };
      __decorate([ property(cc.ProgressBar) ], StartScene.prototype, "pgr", void 0);
      __decorate([ property(cc.Label) ], StartScene.prototype, "tip", void 0);
      __decorate([ property(cc.Label) ], StartScene.prototype, "pgrCount", void 0);
      __decorate([ property(cc.Node) ], StartScene.prototype, "logo", void 0);
      __decorate([ property(cc.Node) ], StartScene.prototype, "logodi", void 0);
      StartScene = __decorate([ ccclass ], StartScene);
      return StartScene;
    }(cc.Component);
    exports.default = StartScene;
    cc._RF.pop();
  }, {
    "../../script/GDefine": "GDefine",
    "../../script/GStarter": "GStarter",
    "../../script/comm/EventCenter": "EventCenter"
  } ],
  StorageLocal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de6acEOtyZB/7uVnDqSizsL", "StorageLocal");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StorageLocal = void 0;
    var StorageLocal = function() {
      function StorageLocal() {}
      StorageLocal.prototype.set = function(key, value) {
        var p = this.get(key);
        "boolean" === typeof value ? cc.sys.localStorage.setItem(key, value ? "true" : "false") : "number" === typeof value ? cc.sys.localStorage.setItem(key, value.toString()) : "string" === typeof value ? cc.sys.localStorage.setItem(key, value) : "object" === typeof value ? cc.sys.localStorage.setItem(key, JSON.stringify(value)) : cc.sys.localStorage.removeItem(key);
        return p;
      };
      StorageLocal.prototype.get = function(key, defaultValue) {
        var p = cc.sys.localStorage.getItem(key);
        if (!p) return defaultValue;
        if ("true" === p) p = true; else if ("false" === p) p = false; else if (isNaN(Number(p))) try {
          p = JSON.parse(p);
        } catch (error) {} else p = Number(p);
        return p;
      };
      StorageLocal.prototype.del = function(key) {
        var p = this.get(key);
        p && cc.sys.localStorage.removeItem(key);
        return p;
      };
      return StorageLocal;
    }();
    exports.StorageLocal = StorageLocal;
    cc._RF.pop();
  }, {} ],
  StructPool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2515b1fXOpCJ44VQGrYmi9C", "StructPool");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StructPool = void 0;
    var StructPool = function() {
      function StructPool() {}
      StructPool.prototype.v3 = function(xOv, y, z) {
        void 0 === xOv && (xOv = 0);
        void 0 === y && (y = 0);
        void 0 === z && (z = 0);
        var v = this.pool.createByClass(cc.Vec3);
        if ("object" === typeof xOv) {
          v.x = xOv.x || 0;
          v.y = xOv.y || 0;
          v.z = xOv.z || 0;
        } else {
          v.x = xOv || 0;
          v.y = y || 0;
          v.z = z || 0;
        }
        return v;
      };
      StructPool.prototype.v2 = function(xOv, y) {
        void 0 === xOv && (xOv = 0);
        void 0 === y && (y = 0);
        var v = this.pool.createByClass(cc.Vec2);
        if ("object" === typeof xOv) {
          v.x = xOv.x || 0;
          v.y = xOv.y || 0;
        } else {
          v.x = xOv || 0;
          v.y = y || 0;
        }
        return v;
      };
      StructPool.prototype.quat = function(copy) {
        var v = this.pool.createByClass(cc.Quat);
        if (copy) {
          v.x = copy.x || 0;
          v.y = copy.y || 0;
          v.z = copy.z || 0;
          "number" === typeof copy.w ? v.w = copy.w : v.w = 1;
        } else cc.Quat.identity(v);
        return v;
      };
      StructPool.prototype.mat4 = function() {
        var v = this.pool.createByClass(cc.Mat4);
        v.identity();
        return v;
      };
      StructPool.prototype.recover = function() {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) obj[_i] = arguments[_i];
        for (var i = 0, len = obj.length; i < len; i++) {
          var item = obj[i];
          if (!item) continue;
          this.pool.recoverByClass(item);
        }
      };
      return StructPool;
    }();
    exports.StructPool = StructPool;
    cc._RF.pop();
  }, {} ],
  SubEnergyUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2edd1y1NxNNRKzC4i49Ac8H", "SubEnergyUI");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SubEnergyUI = function(_super) {
      __extends(SubEnergyUI, _super);
      function SubEnergyUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.iconNode = null;
        return _this;
      }
      SubEnergyUI.prototype.onLoad = function() {
        var _this = this;
        this.label.string = "-" + GGlobal_1.default.cfg.world.playUseEnergyCount.toString();
        this.iconNode.position = cc.v3(200, 0, 0);
        cc.tween(this.iconNode).to(.5, {
          y: 1e3
        }).call(function() {
          _this.node.active = false;
        }).start();
      };
      __decorate([ property(cc.Label) ], SubEnergyUI.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], SubEnergyUI.prototype, "iconNode", void 0);
      SubEnergyUI = __decorate([ ccclass ], SubEnergyUI);
      return SubEnergyUI;
    }(cc.Component);
    exports.default = SubEnergyUI;
    cc._RF.pop();
  }, {
    "../GGlobal": "GGlobal"
  } ],
  UIMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eeba0P58RpO+K5xcV5hc+3g", "UIMgr");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("../comm/EventCenter");
    var UtilFunc_1 = require("../comm/UtilFunc");
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIMgr = function(_super) {
      __extends(UIMgr, _super);
      function UIMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.back = null;
        _this.front = null;
        _this.top = null;
        _this.showingWinDic = [];
        return _this;
      }
      UIMgr_1 = UIMgr;
      UIMgr.prototype.onLoad = function() {
        UIMgr_1.instance = this;
      };
      UIMgr.prototype.onEnable = function() {
        EventCenter_1.EventCenter.on(GDefine_1.GEvent.UICtrl, this.onCtrl, this);
      };
      UIMgr.prototype.onDisable = function() {
        EventCenter_1.EventCenter.off(GDefine_1.GEvent.UICtrl, this.onCtrl, this);
      };
      UIMgr.prototype.onCtrl = function(type, state, arg) {
        var win;
        switch (state) {
         case GDefine_1.GUIState.open:
          win = this.getWin(type);
          win ? win.setParent(this.front) : this.waitLoad(type, state, arg);
          break;

         case GDefine_1.GUIState.openBack:
          win = this.getWin(type);
          win ? win.setParent(this.back) : this.waitLoad(type, state, arg);
          break;

         case GDefine_1.GUIState.openTop:
          win = this.getWin(type);
          win ? win.setParent(this.top) : this.waitLoad(type, state, arg);
          break;

         case GDefine_1.GUIState.close:
          win = this.closeWin(type);
        }
        win && win.emit(GDefine_1.GEvent.UICtrl, type, state, arg);
      };
      UIMgr.prototype.getWin = function(type) {
        var win = this.showingWinDic[type];
        if (win) {
          win.active = true;
          return win;
        }
        var n = GDefine_1.Window2Node(type);
        if (n) {
          var w = GGlobal_1.default.getNode(n);
          if (w) {
            this.showingWinDic[type] = w;
            w.active = true;
          }
        }
        return;
      };
      UIMgr.prototype.closeWin = function(type, arg) {
        var win = this.showingWinDic[type];
        if (!win || !win.active) return;
        win.active = false;
        return win;
      };
      UIMgr.prototype.waitLoad = function(type, state, arg) {
        var _this = this;
        var n = GDefine_1.Window2Node(type);
        if (!n) return;
        GGlobal_1.default.nodePool.load(n, function(win) {
          if (!win) return;
          switch (state) {
           case GDefine_1.GUIState.open:
            win.setParent(_this.front);
            break;

           case GDefine_1.GUIState.openBack:
            win.setParent(_this.back);
            break;

           case GDefine_1.GUIState.openTop:
            win.setParent(_this.top);
          }
          win.active = true;
          _this.showingWinDic[type] = win;
        });
      };
      UIMgr.prototype.add_button_listen = function(node, caller, func) {
        if (!node.getComponent(cc.Button)) return;
        node.on("click", func, caller);
      };
      UIMgr.prototype.remove_button_listen = function(node, caller, func) {
        node.off("click", func, caller);
      };
      var UIMgr_1;
      UIMgr.instance = null;
      __decorate([ property(cc.Node) ], UIMgr.prototype, "back", void 0);
      __decorate([ property(cc.Node) ], UIMgr.prototype, "front", void 0);
      __decorate([ property(cc.Node) ], UIMgr.prototype, "top", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        tooltip: UtilFunc_1.StringTool.KVToString(GDefine_1.GWindow)
      }) ], UIMgr.prototype, "showingWinDic", void 0);
      UIMgr = UIMgr_1 = __decorate([ ccclass ], UIMgr);
      return UIMgr;
    }(cc.Component);
    exports.default = UIMgr;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter",
    "../comm/UtilFunc": "UtilFunc"
  } ],
  UpgradeHero: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0004eznmT5LCKwhlgefBqSy", "UpgradeHero");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("../comm/EventCenter");
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UpgradeHero = function(_super) {
      __extends(UpgradeHero, _super);
      function UpgradeHero() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.UpClick = null;
        _this.upGradeCost = null;
        _this.curHeroAttack = null;
        _this.isTouching = false;
        _this.tt = 0;
        return _this;
      }
      UpgradeHero.prototype.onEnable = function() {
        this.UpClick.on(cc.Node.EventType.TOUCH_START, this.onTouchUpgradeStart, this);
        this.UpClick.on(cc.Node.EventType.TOUCH_END, this.onTouchUpgradeEnd, this);
        this.UpClick.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchUpgradeEnd, this);
      };
      UpgradeHero.prototype.onDisable = function() {
        this.UpClick.off(cc.Node.EventType.TOUCH_START, this.onTouchUpgradeStart, this);
        this.UpClick.off(cc.Node.EventType.TOUCH_END, this.onTouchUpgradeEnd, this);
        this.UpClick.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchUpgradeEnd, this);
      };
      UpgradeHero.prototype.start = function() {
        this.updateLayer();
      };
      UpgradeHero.prototype.onTouchUpgradeStart = function() {
        var _this = this;
        this.isTouching = true;
        this.onUpgradeClick();
        cc.tween(this.node).delay(.5).call(function() {
          cc.tween(_this.UpClick).delay(.1).call(function() {
            _this.onUpgradeClick();
          }).union().repeatForever().start();
        }).start();
      };
      UpgradeHero.prototype.onTouchUpgradeEnd = function() {
        this.isTouching = false;
        this.UpClick.stopAllActions();
        this.node.stopAllActions();
      };
      UpgradeHero.prototype.onUpgradeClick = function() {
        if (GGlobal_1.default.player.money >= GGlobal_1.default.cfg.hero.getUpHeroCost()) {
          GGlobal_1.default.player.money -= GGlobal_1.default.cfg.hero.getUpHeroCost();
          GGlobal_1.default.player.heroLevel[GGlobal_1.default.player.curtHeroId].level++;
          GGlobal_1.default.player.write();
          EventCenter_1.EventCenter.emit(GDefine_1.GEvent.UpdateLobbyMoneyCount);
          EventCenter_1.EventCenter.emit(GDefine_1.GEvent.PlaySound, GDefine_1.AllAssets.music_\u5347\u7ea7);
          this.updateLayer();
        }
      };
      UpgradeHero.prototype.updateLayer = function() {
        this.upGradeCost.string = GGlobal_1.default.cfg.hero.getUpHeroCost().toString();
        this.curHeroAttack.string = GGlobal_1.default.cfg.hero.getUpHeroKnifeAttack().toString();
      };
      __decorate([ property(cc.Node) ], UpgradeHero.prototype, "UpClick", void 0);
      __decorate([ property(cc.Label) ], UpgradeHero.prototype, "upGradeCost", void 0);
      __decorate([ property(cc.Label) ], UpgradeHero.prototype, "curHeroAttack", void 0);
      UpgradeHero = __decorate([ ccclass ], UpgradeHero);
      return UpgradeHero;
    }(cc.Component);
    exports.default = UpgradeHero;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter"
  } ],
  UpgradeKnife: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "811b6clI9JGfr6qvXJwc3SA", "UpgradeKnife");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("../comm/EventCenter");
    var GDefine_1 = require("../GDefine");
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UpgradeKnife = function(_super) {
      __extends(UpgradeKnife, _super);
      function UpgradeKnife() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.UpClick = null;
        _this.upGradeCost = null;
        _this.curKnifeAttack = null;
        _this.curKnifeLevel = null;
        _this.isTouching = false;
        _this.tt = 0;
        return _this;
      }
      UpgradeKnife.prototype.onEnable = function() {
        this.UpClick.on(cc.Node.EventType.TOUCH_START, this.onTouchUpgradeStart, this);
        this.UpClick.on(cc.Node.EventType.TOUCH_END, this.onTouchUpgradeEnd, this);
        this.UpClick.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchUpgradeEnd, this);
      };
      UpgradeKnife.prototype.onDisable = function() {
        this.UpClick.off(cc.Node.EventType.TOUCH_START, this.onTouchUpgradeStart, this);
        this.UpClick.off(cc.Node.EventType.TOUCH_END, this.onTouchUpgradeEnd, this);
        this.UpClick.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchUpgradeEnd, this);
      };
      UpgradeKnife.prototype.start = function() {
        this.updateLayer();
      };
      UpgradeKnife.prototype.onTouchUpgradeStart = function() {
        var _this = this;
        this.isTouching = true;
        this.onUpgradeClick();
        cc.tween(this.node).delay(.5).call(function() {
          cc.tween(_this.UpClick).delay(.1).call(function() {
            _this.onUpgradeClick();
          }).union().repeatForever().start();
        }).start();
      };
      UpgradeKnife.prototype.onTouchUpgradeEnd = function() {
        this.isTouching = false;
        this.UpClick.stopAllActions();
        this.node.stopAllActions();
      };
      UpgradeKnife.prototype.onUpgradeClick = function() {
        if (GGlobal_1.default.player.money >= GGlobal_1.default.cfg.knife.getKnifeCostByLv()) {
          GGlobal_1.default.player.money -= GGlobal_1.default.cfg.knife.getKnifeCostByLv();
          GGlobal_1.default.player.knifeLevel++;
          GGlobal_1.default.player.write();
          EventCenter_1.EventCenter.emit(GDefine_1.GEvent.UpdateLobbyMoneyCount);
          EventCenter_1.EventCenter.emit(GDefine_1.GEvent.PlaySound, GDefine_1.AllAssets.music_\u5347\u7ea7);
          this.updateLayer();
        }
      };
      UpgradeKnife.prototype.updateLayer = function() {
        this.upGradeCost.string = GGlobal_1.default.cfg.knife.getKnifeCostByLv().toString();
        this.curKnifeAttack.string = GGlobal_1.default.cfg.knife.getKnifeAttackByLv().toString();
        this.curKnifeLevel.string = GGlobal_1.default.player.knifeLevel.toString();
      };
      __decorate([ property(cc.Node) ], UpgradeKnife.prototype, "UpClick", void 0);
      __decorate([ property(cc.Label) ], UpgradeKnife.prototype, "upGradeCost", void 0);
      __decorate([ property(cc.Label) ], UpgradeKnife.prototype, "curKnifeAttack", void 0);
      __decorate([ property(cc.Label) ], UpgradeKnife.prototype, "curKnifeLevel", void 0);
      UpgradeKnife = __decorate([ ccclass ], UpgradeKnife);
      return UpgradeKnife;
    }(cc.Component);
    exports.default = UpgradeKnife;
    cc._RF.pop();
  }, {
    "../GDefine": "GDefine",
    "../GGlobal": "GGlobal",
    "../comm/EventCenter": "EventCenter"
  } ],
  UtilFunc: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "519dcevHWdG3p/karJb910l", "UtilFunc");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Browser = exports.StringTool = exports.Csv = exports.AsyncLoad = exports.loadSubpackage = exports.PlayAniWait = exports.WebDownLoad = exports.WebDownLoadTxt = exports.WebDownLoadUrl = exports.ShuffleCards = exports.removeEventHandler = exports.addEventHandler = exports.Sleep = exports.sleep = exports.GetResRawPath = exports.HttpPost = exports.HttpGet = exports.PerLoad = exports.LoadRes = exports.LoadRemotePic = exports.MoveTo = exports.GraphicsDrawPolygon = void 0;
    function GraphicsDrawPolygon(graphics, polygon, color) {
      graphics.moveTo(polygon[0].x, polygon[0].y);
      for (var _i = 0, polygon_1 = polygon; _i < polygon_1.length; _i++) {
        var iterator = polygon_1[_i];
        graphics.lineTo(iterator.x, iterator.y);
      }
      graphics.close();
      color && (graphics.fillColor = color);
      graphics.fill();
    }
    exports.GraphicsDrawPolygon = GraphicsDrawPolygon;
    function MoveTo(from, to, speed) {
      var dir = to.sub(from);
      if (dir.magSqr() <= speed * speed) return to;
      return from.add(dir.normalize().mul(speed));
    }
    exports.MoveTo = MoveTo;
    function LoadRemotePic(remoteUrl, type) {
      void 0 === type && (type = "jpg");
      return __awaiter(this, void 0, Promise, function() {
        return __generator(this, function(_a) {
          if (!remoteUrl || 0 === remoteUrl.length) return [ 2 ];
          return [ 2, new Promise(function(resolve, reject) {
            cc.loader.load({
              url: remoteUrl,
              type: type
            }, function(err, texture) {
              if (err) {
                console.log(err);
                resolve(void 0);
                return;
              }
              resolve(new cc.SpriteFrame(texture));
            });
          }) ];
        });
      });
    }
    exports.LoadRemotePic = LoadRemotePic;
    function LoadRes(path, type) {
      return __awaiter(this, void 0, Promise, function() {
        return __generator(this, function(_a) {
          if (!path || 0 === path.length) return [ 2 ];
          return [ 2, new Promise(function(resolve, reject) {
            cc.loader.loadRes(path, type, function(err, resource) {
              if (err) {
                console.log(err);
                resolve(void 0);
                return;
              }
              resolve(resource);
            });
          }) ];
        });
      });
    }
    exports.LoadRes = LoadRes;
    function PerLoad(path) {
      return __awaiter(this, void 0, Promise, function() {
        return __generator(this, function(_a) {
          if (!path || 0 === path.length) return [ 2 ];
          return [ 2, new Promise(function(resolve, reject) {
            cc.loader.loadRes(path, function(err, resource) {
              if (err) {
                console.log(err);
                resolve();
                return;
              }
              resolve();
            });
          }) ];
        });
      });
    }
    exports.PerLoad = PerLoad;
    function HttpGet(url, callback) {
      var xhr = cc.loader.getXMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (4 === xhr.readyState && xhr.status >= 200 && xhr.status < 300) {
          var respone = xhr.responseText;
          callback(respone);
        }
      };
      xhr.open("GET", url, true);
      cc.sys.isNative && xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
      xhr.timeout = 5e3;
      xhr.send();
    }
    exports.HttpGet = HttpGet;
    function HttpPost(url, params, callback) {
      var xhr = cc.loader.getXMLHttpRequest();
      xhr.onreadystatechange = function() {
        cc.log("xhr.readyState=" + xhr.readyState + "  xhr.status=" + xhr.status);
        if (4 === xhr.readyState && xhr.status >= 200 && xhr.status < 300) {
          var respone = xhr.responseText;
          callback(respone);
        } else callback(-1);
      };
      xhr.open("POST", url, true);
      cc.sys.isNative && xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
      xhr.timeout = 5e3;
      xhr.send(params);
    }
    exports.HttpPost = HttpPost;
    function GetResRawPath(path) {
      var pemUrl = cc.url.raw(path);
      cc.loader.md5Pipe && (pemUrl = cc.loader.md5Pipe.transformURL(pemUrl));
      return pemUrl;
    }
    exports.GetResRawPath = GetResRawPath;
    function sleep(s) {
      return __awaiter(this, void 0, Promise, function() {
        return __generator(this, function(_a) {
          return [ 2, new Promise(function(resolve) {
            return setTimeout(resolve, 1e3 * s);
          }) ];
        });
      });
    }
    exports.sleep = sleep;
    function Sleep(self, s) {
      return __awaiter(this, void 0, Promise, function() {
        return __generator(this, function(_a) {
          return [ 2, new Promise(function(resolve) {
            return self.scheduleOnce(resolve, s);
          }) ];
        });
      });
    }
    exports.Sleep = Sleep;
    function addEventHandler(eventHandlers, target, component, handler, customEventData) {
      var e = new cc.Component.EventHandler();
      e.target = target;
      e.component = component;
      e.handler = handler;
      customEventData && (e.customEventData = customEventData);
      eventHandlers.push(e);
    }
    exports.addEventHandler = addEventHandler;
    function removeEventHandler(eventHandlers, target, component, handler, customEventData) {
      for (var index = eventHandlers.length - 1; index >= 0; index--) {
        var element = eventHandlers[index];
        if (element.target !== target) continue;
        if (element.component !== component) continue;
        if (element.handler !== handler) continue;
        if (!element.customEventData && !customEventData) continue;
        if (element.customEventData !== customEventData) continue;
        eventHandlers.splice(index, 1);
      }
    }
    exports.removeEventHandler = removeEventHandler;
    function ShuffleCards(a) {
      for (var i = 0, len = a.length; i < len; i++) {
        var t = a[i];
        var r = Math.floor(len * (Math.random() % 1));
        a[i] = a[r];
        a[r] = t;
      }
      return a;
    }
    exports.ShuffleCards = ShuffleCards;
    function WebDownLoadUrl(url, name) {
      void 0 === name && (name = "");
      var oA = document.createElement("a");
      oA.download = name;
      oA.href = url;
      document.body.appendChild(oA);
      oA.click();
      oA.remove();
    }
    exports.WebDownLoadUrl = WebDownLoadUrl;
    function WebDownLoadTxt(txt, name) {
      void 0 === name && (name = "");
      var blob = new Blob([ txt ]);
      var url = URL.createObjectURL(blob);
      WebDownLoadUrl(url, name);
      URL.revokeObjectURL(url);
    }
    exports.WebDownLoadTxt = WebDownLoadTxt;
    function WebDownLoad(objs, name) {
      void 0 === name && (name = "");
      var blob = new Blob(objs);
      var url = URL.createObjectURL(blob);
      WebDownLoadUrl(url, name);
      URL.revokeObjectURL(url);
    }
    exports.WebDownLoad = WebDownLoad;
    function PlayAniWait(animation, name) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [ 2, new Promise(function(resolve, reject) {
            var onAniFinish = function(type, state) {
              if (state.name === name) {
                animation.off(cc.Animation.EventType.FINISHED, onAniFinish);
                resolve();
              }
            };
            var s = animation.play(name);
            if (s) {
              s.wrapMode = cc.WrapMode.Normal;
              animation.on(cc.Animation.EventType.FINISHED, onAniFinish);
            } else resolve();
          }) ];
        });
      });
    }
    exports.PlayAniWait = PlayAniWait;
    function loadSubpackage(name) {
      return __awaiter(this, void 0, Promise, function() {
        return __generator(this, function(_a) {
          return [ 2, new Promise(function(resolve, reject) {
            cc.loader.downloader.loadSubpackage(name, function(err) {
              if (err) {
                console.error("[loadSubpackage]", err);
                resolve(false);
                return;
              }
              resolve(true);
            });
          }) ];
        });
      });
    }
    exports.loadSubpackage = loadSubpackage;
    var AsyncLoad;
    (function(AsyncLoad) {
      function preloadScene(name, onProgress) {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              cc.director.preloadScene(name, onProgress, function(err) {
                err ? resolve(err) : resolve();
              });
            }) ];
          });
        });
      }
      AsyncLoad.preloadScene = preloadScene;
    })(AsyncLoad = exports.AsyncLoad || (exports.AsyncLoad = {}));
    var Csv;
    (function(Csv) {
      function ReadCsv1NoType(csv, indexField, offset, split) {
        void 0 === offset && (offset = 1);
        void 0 === split && (split = ",");
        var lines = csv.split(/[\r\n]+/);
        var keys = lines[offset].split(split);
        var ii = indexField ? keys.indexOf(indexField) : -1;
        var list = ii < 0 ? [] : {};
        var addOne = ii < 0 ? function(obj, line) {
          list.push(obj);
        } : function(obj, line) {
          list[line[ii]] = obj;
        };
        offset++;
        for (var len = lines.length; offset < len; offset++) {
          var line = lines[offset].split(split);
          if (line.length <= 1) continue;
          var obj = {};
          for (var j = 0; j < line.length; j++) {
            obj[keys[j]] = line[j];
            keys[j].includes("BUFF_Action") && console.log(keys[j] + line[j]);
          }
          addOne(obj, line);
        }
        return list;
      }
      Csv.ReadCsv1NoType = ReadCsv1NoType;
      function ReadCsv1(csv, indexField, offset, split) {
        void 0 === offset && (offset = 1);
        void 0 === split && (split = ",");
        var lines = csv.split(/[\r\n]+/);
        var keys = lines[offset].split(split);
        var types = lines[offset + 1].split(split);
        offset++;
        var ii = indexField ? keys.indexOf(indexField) : -1;
        var list = ii < 0 ? [] : {};
        var addOne = ii < 0 ? function(obj, line) {
          list.push(obj);
        } : function(obj, line) {
          list[line[ii]] = obj;
        };
        offset++;
        for (var len = lines.length; offset < len; offset++) {
          var line = lines[offset].split(split);
          if (line.length <= 1) continue;
          var obj = {};
          for (var j = 0; j < line.length; j++) switch (types[j]) {
           case "int":
           case "float":
            obj[keys[j]] = +line[j];
            break;

           case "string":
            "null" === line[j] ? obj[keys[j]] = null : obj[keys[j]] = line[j];
            break;

           default:
            obj[keys[j]] = line[j];
          }
          addOne(obj, line);
        }
        return list;
      }
      Csv.ReadCsv1 = ReadCsv1;
      function CreatScript(csv, split) {
        void 0 === split && (split = ",");
        var lines = csv.split(/[\r\n]+/);
        var infos = lines[0].split(split);
        var comments = lines[1].split(split);
        var fields = lines[2].split(split);
        var types = lines[3].split(split);
        var res = "/**\n*version " + infos[1] + "\n*/\nexport interface " + infos[0] + " {";
        for (var i = 0; i < fields.length; i++) {
          var t = types[i];
          switch (t) {
           case "int":
           case "float":
            t = "number";
            break;

           case "string":
           default:
            t = "string";
          }
          res += "\n    /**\n    *" + comments[i] + "\n    */\n    readonly " + fields[i] + ": " + t;
        }
        res += "\n}";
        return {
          name: infos[0],
          version: infos[1],
          scriptString: res
        };
      }
      Csv.CreatScript = CreatScript;
      function CreatScriptMult(csvs, nameArrName, split) {
        void 0 === split && (split = ",");
        var names = [];
        var m = "";
        for (var i = 0; i < csvs.length; i++) {
          var res = CreatScript(csvs[i], split);
          m += res.scriptString + "\n";
          names.push(res.name);
        }
        m = "export const " + nameArrName + ' = ["' + names.join('", "') + '"]\nexport type ' + nameArrName + 'Type = "' + names.join('" | "') + '"\n' + m;
        m = "\n}\n" + m;
        for (var i = 0; i < names.length; i++) {
          var element = names[i];
          m = "\n    readonly " + element + ": { [key: number]: " + element + " }" + m;
        }
        m = "export interface I" + nameArrName + " {" + m;
        return {
          names: names,
          scriptString: m
        };
      }
      Csv.CreatScriptMult = CreatScriptMult;
      function ReadCsv2(csv, indexField, offset, split, emptyLine) {
        void 0 === offset && (offset = 2);
        void 0 === split && (split = ",");
        void 0 === emptyLine && (emptyLine = false);
        var lines = csv.split(/[\r\n]+/);
        var res = {
          name: "",
          version: "",
          data: void 0
        };
        var infos = lines[0].split(split);
        res.name = infos[0];
        res.version = infos[1];
        if (emptyLine) {
          for (;offset < lines.length; offset++) if (lines[offset].length > 1) break;
          if (offset >= lines.length) return;
        }
        var keys = lines[offset].split(split);
        offset++;
        if (emptyLine) {
          for (;offset < lines.length; offset++) if (lines[offset].length > 1) break;
          if (offset >= lines.length) return;
        }
        var types = lines[offset].split(split);
        indexField || (indexField = infos[2]);
        var ii = indexField ? keys.indexOf(indexField) : -1;
        var list = ii < 0 ? [] : {};
        var addOne = ii < 0 ? function(obj, line) {
          list.push(obj);
        } : function(obj, line) {
          list[line[ii]] = obj;
        };
        offset++;
        for (var len = lines.length; offset < len; offset++) {
          var line = lines[offset].split(split);
          if (line.length <= 1) continue;
          var obj = {};
          for (var j = 0; j < line.length; j++) switch (types[j]) {
           case "int":
           case "float":
            obj[keys[j]] = +line[j];
            break;

           case "string":
            "null" === line[j] ? obj[keys[j]] = null : obj[keys[j]] = line[j];
            break;

           default:
            obj[keys[j]] = line[j];
          }
          addOne(obj, line);
        }
        res.data = list;
        return res;
      }
      Csv.ReadCsv2 = ReadCsv2;
    })(Csv = exports.Csv || (exports.Csv = {}));
    var StringTool;
    (function(StringTool) {
      function KVToString(obj) {
        var tip = "";
        for (var key in obj) if (obj.hasOwnProperty(key)) {
          var element = obj[key];
          tip += key + " : " + element + "\n";
        }
        tip.length > 1 && (tip = tip.substring(0, tip.length - 1));
        return tip;
      }
      StringTool.KVToString = KVToString;
    })(StringTool = exports.StringTool || (exports.StringTool = {}));
    var Browser;
    (function(Browser) {
      function download(filename, text) {
        var pom = document.createElement("a");
        pom.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
        pom.setAttribute("download", filename);
        if (document.createEvent) {
          var event = document.createEvent("MouseEvents");
          event.initEvent("click", true, true);
          pom.dispatchEvent(event);
        } else pom.click();
      }
      Browser.download = download;
    })(Browser = exports.Browser || (exports.Browser = {}));
    cc._RF.pop();
  }, {} ],
  WorldCfg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3e5deb2WLtDCYZAwHAue6Ay", "WorldCfg");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WorldCfg = void 0;
    var WorldCfg = function() {
      function WorldCfg() {
        this.enemy_find_distance = 400;
        this.enemy_change_state_time = .5;
        this.enemy_move_speed = 120;
        this.quickItemBornTime = 1;
        this.quickItemSpeedTimes = 2;
        this.quickItemSpeedLastTime = 10;
        this.quickItemBornProbality = .1;
        this.wildKnifeBornTime = 1;
        this.wildKnifeBornProbality = .3;
        this.killEnemyAddMoneyNodeCount = 3;
        this.killEnemyAddMoneyCount = 50;
        this.playUseEnergyCount = 4;
        this.maxEnergyCount = 60;
        this.addOneEnergyNeedTime = 300;
        this.addEnergyCount = 30;
      }
      WorldCfg.prototype.getRadiusByCount = function(knifeCount) {
        var one_knife_width = 60;
        var length = knifeCount * one_knife_width;
        var r = length / Math.PI / 2;
        return r < 100 ? 100 : r;
      };
      return WorldCfg;
    }();
    exports.WorldCfg = WorldCfg;
    cc._RF.pop();
  }, {} ],
  knifeEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4f7abh7KjZBb4PL1qm9pYnl", "knifeEffect");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RotateSpeed = exports.RotateDir = void 0;
    var GGlobal_1 = require("../GGlobal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RotateDir;
    (function(RotateDir) {
      RotateDir[RotateDir["TO_NONE"] = 0] = "TO_NONE";
      RotateDir[RotateDir["TO_LEFT"] = -1] = "TO_LEFT";
      RotateDir[RotateDir["TO_RIGHT"] = 1] = "TO_RIGHT";
    })(RotateDir = exports.RotateDir || (exports.RotateDir = {}));
    var RotateSpeed;
    (function(RotateSpeed) {
      RotateSpeed[RotateSpeed["SPEED_ZERO"] = 0] = "SPEED_ZERO";
      RotateSpeed[RotateSpeed["SPEED_ONE"] = 1.5] = "SPEED_ONE";
      RotateSpeed[RotateSpeed["SPEED_TWO"] = 2] = "SPEED_TWO";
      RotateSpeed[RotateSpeed["SPEED_THREE"] = 2.5] = "SPEED_THREE";
    })(RotateSpeed = exports.RotateSpeed || (exports.RotateSpeed = {}));
    var knifeEffect = function(_super) {
      __extends(knifeEffect, _super);
      function knifeEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.rotateSpeed = RotateSpeed.SPEED_ZERO;
        _this.rotateDir = RotateDir.TO_NONE;
        _this.rotateValue = 180;
        _this.knife = null;
        _this.knife_postiton = cc.v3();
        _this.isQuickEffct = false;
        return _this;
      }
      knifeEffect.prototype.start = function() {
        this.init();
        this.scheduleOnce(this.run, .1);
      };
      knifeEffect.prototype.init = function() {
        GGlobal_1.default.data.quickSpeedLastTime = 0;
        this.quickSpeedTimes = 1;
      };
      knifeEffect.prototype.run = function() {
        var index = parseInt(this.node.name.replace("heroKnife", ""));
        switch (index) {
         case 0:
          this.rotateDir = RotateDir.TO_LEFT;
          this.rotateSpeed = RotateSpeed.SPEED_ONE;
          break;

         case 1:
          this.rotateDir = RotateDir.TO_RIGHT;
          this.rotateSpeed = RotateSpeed.SPEED_ONE;
          break;

         case 2:
          this.rotateDir = RotateDir.TO_LEFT;
          this.rotateSpeed = RotateSpeed.SPEED_ONE;
          break;

         default:
          this.isQuickEffct = true;
          this.node.opacity = 0;
          this.rotateDir = RotateDir.TO_LEFT;
          this.rotateSpeed = RotateSpeed.SPEED_ONE;
        }
      };
      knifeEffect.prototype.update = function(dt) {
        if (GGlobal_1.default.data.quickSpeedLastTime <= 0) {
          this.quickSpeedTimes = 1;
          this.isQuickEffct && (this.node.opacity = 0);
        } else {
          this.quickSpeedTimes = GGlobal_1.default.cfg.world.quickItemSpeedTimes;
          this.isQuickEffct && (this.node.opacity = 255);
        }
        this.node.angle += this.rotateValue * this.rotateDir * this.rotateSpeed * dt * GGlobal_1.default.data.GameSpeed * this.quickSpeedTimes;
        this.node.angle %= 360;
        var tab = this.node.getComponentsInChildren(cc.RigidBody);
        for (var i = 0; i < tab.length; i++) {
          tab[i].syncRotation(true);
          tab[i].syncPosition(true);
        }
      };
      knifeEffect = __decorate([ ccclass ], knifeEffect);
      return knifeEffect;
    }(cc.Component);
    exports.default = knifeEffect;
    cc._RF.pop();
  }, {
    "../GGlobal": "GGlobal"
  } ],
  shadow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68f78CjQvlCZLgh6/1PGibu", "shadow");
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var shadow = function(_super) {
      __extends(shadow, _super);
      function shadow() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.shadow = null;
        _this.cam = null;
        _this.enemy = null;
        return _this;
      }
      shadow.prototype.start = function() {
        var rt = new cc.RenderTexture();
        rt.initWithSize(this.shadow.node.width, this.shadow.node.height);
        this.cam.targetTexture = rt;
        var sp = new cc.SpriteFrame(rt);
        this.shadow.spriteFrame = sp;
      };
      __decorate([ property(cc.Sprite) ], shadow.prototype, "shadow", void 0);
      __decorate([ property(cc.Camera) ], shadow.prototype, "cam", void 0);
      __decorate([ property(cc.Node) ], shadow.prototype, "enemy", void 0);
      shadow = __decorate([ ccclass ], shadow);
      return shadow;
    }(cc.Component);
    exports.default = shadow;
    cc._RF.pop();
  }, {} ]
}, {}, [ "CfgMgr", "GAsset", "GData", "GDefine", "GGlobal", "GPlayer", "GStarter", "HeroCfg", "KnifeCfg", "LevelCfg", "WorldCfg", "AdAdapter", "AdMgrNode", "Animator", "AssetMgr", "AudioMgr", "DataWatcher", "Define", "ECS", "EventCenter", "GuideMgr", "IState", "IStateSync", "IStorage", "ObjectPool", "SettingMgr", "Shake", "StorageLocal", "StructPool", "UtilFunc", "GifPlayer", "Drag3dObj", "DragCam", "EffectMgr", "EnergyTime", "knifeEffect", "BaseLevel", "Level_1", "Enemy", "Hero", "Item", "Knife", "Level", "GNodes", "SceneAssets", "GameScene", "LobbyScene", "StartScene", "shadow", "EnergyUI", "LobbyUI", "SettingUI", "SubEnergyUI", "UIMgr", "UpgradeHero", "UpgradeKnife" ]);