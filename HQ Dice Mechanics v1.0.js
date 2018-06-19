//Hero Quest Dice Mechanics
//
// copyright pug games 2014
// please feel free to use this script, change it, add to it in any way you feel
// Script created by Roll20 user Konrad J.
//
// !hq log on|multi|single|off  // default:on and multi
// outputs dice rolled to the chat window if "on", only the result if "off"
// dice rolled will be on single line if "single" and on multiple lines if "multi"
// !hq graphics on|off|s|m|l  //default:on and m
// shows dice rolled as graphic, small, medium, or large if "on" or as text if "off"
// !hq #h #m					// if h is first then the hero is attacking, if the m is first then the monster is attacking
//
// !hq w #h #m					  	// whisper not really working very well right now, please ignore this option for now
// will roll the dice and whisper them only to the GM, gm can't whisper dice rolls to other players
// due to the way the API currently works we can only send a whisper dice roll via text output, even if you have graphics rolling turned on
//
// !hq test // this will output every side of every die to the chat window
//

var hqCONSTANTS = {
	HQCOMMAND: "!hq",
	GRAPHICSIZE: {
		SMALL: 20,
		MEDIUM: 30,
		LARGE: 40,
		XLARGE: 50,
		XXLARGE: 60
	},
	HQDICESYMBOL: {
		SKULL: "http://i.imgur.com/ydFYxkv.png",
		WSHIELD: "http://i.imgur.com/QISboqy.png",
		BSHIELD: "http://i.imgur.com/AeklETC.png"
	},
	HQDICEWHITE: {
		SKULL: "http://i.imgur.com/JZfuoZr.jpg",
		WSHIELD: "http://i.imgur.com/fk5nuTh.jpg",
		BSHIELD: "http://i.imgur.com/7J2SZzF.jpg"
	},
	HQDICERED: {
		SKULL: "http://i.imgur.com/4Ye1BDj.jpg",
		WSHIELD: "http://i.imgur.com/XQsimgu.jpg",
		BSHIELD: "http://i.imgur.com/PBt16sl.jpg"
	},
	VAMPIRE: {
		NIL: "https://i.imgur.com/mOWlrqY.png",
		SUCCESS: "https://i.imgur.com/AvbNZyj.png",
		CRIT: "https://i.imgur.com/2Of81jY.png"
	},
	HUNGER: {
		FAIL: "https://i.imgur.com/VkTL8UI.png",
		NIL: "https://i.imgur.com/IANho1N.png",
		SUCCESS: "https://i.imgur.com/rCNoixl.png",
		CRIT: "https://i.imgur.com/WN2FihC.png"
	}
};

var hqGlobal = {
	diceLogChat: true,
	diceLogChatWhisper: false,
	diceGraphicsChat: true,
	diceGraphicsChatSize: hqCONSTANTS.GRAPHICSIZE.LARGE,
	diceTextResult: "",
	diceTextResultLog: "",
	diceGraphicResult: "",
	diceGraphicResultLog: "",
	diceTestEnabled: false,
	diceLogRolledOnOneLine: false
};

function rollHQDice(diceQty, type, who) {
	//1 Black Shield
	//2 White Shield
	//3 White Shield
	//4 Skull
	//5 Skull
	//6 Skull
	var roll = 0;
	var diceResult = {
		bShield: 0,
		wShield: 0,
		skull: 0,
		diceGraphicsLog: "",
		diceTextLog: ""
	};

	// Used to build images
	var i = 0;
	var s1 = '<img src="';
	var s2 = '" title="';
	var s3 = '" height="';
	var s4 = '" width="';
	var s5 = '"/>';

	// Likely can remove
	if (type === "h") {
		diceResult.diceTextLog = "Hero: ";
	} else if (type === "m") {
		diceResult.diceTextLog = "Monster: ";
	}

	if (hqGlobal.diceTestEnabled === true) {
		diceQty = 6;
	}

	for (i = 1; i <= diceQty; i++) {

		if (hqGlobal.diceTestEnabled === true) {
			roll = roll + 1;
		}
		else {
			roll = randomInteger(6);
		}

		if (type === "h") {
			switch (roll) {
				case 1:
					diceResult.diceTextLog = diceResult.diceTextLog + "(BShield)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICEWHITE.BSHIELD + s2 + "Black Shield" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.bShield = diceResult.bShield + 1;
					break;
				case 2:
					diceResult.diceTextLog = diceResult.diceTextLog + "(WShield)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICEWHITE.WSHIELD + s2 + "White Shield" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.wShield = diceResult.wShield + 1;
					break;
				case 3:
					diceResult.diceTextLog = diceResult.diceTextLog + "(WShield)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICEWHITE.WSHIELD + s2 + "White Shield" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.wShield = diceResult.wShield + 1;
					break;
				case 4:
					diceResult.diceTextLog = diceResult.diceTextLog + "(Skull)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICEWHITE.SKULL + s2 + "Skull" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 5:
					diceResult.diceTextLog = diceResult.diceTextLog + "(Skull)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICEWHITE.SKULL + s2 + "Skull" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 6:
					diceResult.diceTextLog = diceResult.diceTextLog + "(Skull)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICEWHITE.SKULL + s2 + "Skull" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
			}
		} else if (type === "m") {
			switch (roll) {
				case 1:
					diceResult.diceTextLog = diceResult.diceTextLog + "(BShield)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICERED.BSHIELD + s2 + "Black Shield" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.bShield = diceResult.bShield + 1;
					break;
				case 2:
					diceResult.diceTextLog = diceResult.diceTextLog + "(WShield)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICERED.WSHIELD + s2 + "White Shield" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.wShield = diceResult.wShield + 1;
					break;
				case 3:
					diceResult.diceTextLog = diceResult.diceTextLog + "(WShield)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICERED.WSHIELD + s2 + "White Shield" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.wShield = diceResult.wShield + 1;
					break;
				case 4:
					diceResult.diceTextLog = diceResult.diceTextLog + "(Skull)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICERED.SKULL + s2 + "Skull" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 5:
					diceResult.diceTextLog = diceResult.diceTextLog + "(Skull)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICERED.SKULL + s2 + "Skull" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 6:
					diceResult.diceTextLog = diceResult.diceTextLog + "(Skull)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HQDICERED.SKULL + s2 + "Skull" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
			}
		} else if (type === "v") {
			roll = randomInteger(10);
			switch (roll) {
				case 1:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "1" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.bShield = diceResult.bShield + 1;
					break;
				case 2:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "2" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.wShield = diceResult.wShield + 1;
					break;
				case 3:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "3" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.wShield = diceResult.wShield + 1;
					break;
				case 4:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "4" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 5:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "5" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 6:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "6" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 7:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.SUCCESS + s2 + "7" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 8:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.SUCCESS + s2 + "8" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 9:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.SUCCESS + s2 + "9" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
				case 10:
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.CRIT + s2 + "0" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skull = diceResult.skull + 1;
					break;
			}
		 } else {
				roll = randomInteger(10);
				switch (roll) {
					case 1:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.FAIL + s2 + "1" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.bShield = diceResult.bShield + 1;
						break;
					case 2:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.NIL + s2 + "2" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.wShield = diceResult.wShield + 1;
						break;
					case 3:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.NIL + s2 + "3" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.wShield = diceResult.wShield + 1;
						break;
					case 4:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.NIL + s2 + "4" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.skull = diceResult.skull + 1;
						break;
					case 5:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.NIL + s2 + "5" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.skull = diceResult.skull + 1;
						break;
					case 6:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.NIL + s2 + "6" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.skull = diceResult.skull + 1;
						break;
					case 7:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.SUCCESS + s2 + "7" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.skull = diceResult.skull + 1;
						break;
					case 8:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.SUCCESS + s2 + "8" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.skull = diceResult.skull + 1;
						break;
					case 9:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.SUCCESS + s2 + "9" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.skull = diceResult.skull + 1;
						break;
					case 10:
						diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.CRIT + s2 + "0" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
						diceResult.skull = diceResult.skull + 1;
						break;
				}
			}
		}
		return diceResult;
	}

	function processHeroQuestDiceScript(diceToRoll, who) {

		var diceTotals = {
			bShield: 0,
			wShield: 0,
			skull: 0
		};
		var attackDiceResults = {
			bShield: 0,
			wShield: 0,
			skull: 0,
			diceGraphicsLog: "",
			diceTextLog: ""
		};
		var defendDiceResults = {
			bShield: 0,
			wShield: 0,
			skull: 0,
			diceGraphicsLog: "",
			diceTextLog: ""
		};
		var i = 0;
		var j = diceToRoll.length;
		var diceTextResults = "";
		var diceGraphicsResults = "";
		var diceTextRolled = "";
		var diceGraphicsRolled = "";
		var s1 = '<img src="';
		var s2 = '" title="';
		var s3 = '" height="';
		var s4 = '" width="';
		var s5 = '"/>';
		var attack = "";
		var defend = "";
		var diceQty = "";
		var damage = 0;

		attack = diceToRoll[0].substring(0, 1);
		diceQty = diceToRoll[0].substring(1);
		attackDiceResults = rollHQDice(diceQty, attack, who);

		defend = diceToRoll[1].substring(0, 1);
		diceQty = diceToRoll[1].substring(1);
		defendDiceResults = rollHQDice(diceQty, defend, who);

		if (hqGlobal.diceTestEnabled === true) {
			sendChat("", "/desc " + who + ": h1 m1");
		}
		else {
			if (hqGlobal.diceLogChatWhisper === true) {
				//sendChat(who, "/w gm " + diceToRoll);
				//sendChat(who, "/w " + who + " " + diceToRoll);
			}
			else {
				sendChat(who, "/em " + diceToRoll);
			}
		}

		if (hqGlobal.diceLogChat === true) {
			if (hqGlobal.diceLogRolledOnOneLine === true) {
				diceGraphicsRolled = attackDiceResults.diceGraphicsLog + defendDiceResults.diceGraphicsLog;
				diceTextRolled = attackDiceResults.diceTextLog + defendDiceResults.diceTextLog;
				if (hqGlobal.diceGraphicsChat === true && hqGlobal.diceLogChatWhisper === false) {
					sendChat("", "/direct " + diceGraphicsRolled);
				}
				else {
					if (hqGlobal.diceLogChatWhisper === true) {
						//sendChat("", "/w gm " + diceTextRolled);
						//sendChat("", "/w " + who + " " + diceTextRolled);
					}
					else {
						sendChat("", diceTextRolled);
					}
				}
			}
			else {
				if (hqGlobal.diceGraphicsChat === true && hqGlobal.diceLogChatWhisper === false) {
					sendChat("", "/direct " + attackDiceResults.diceGraphicsLog);
					sendChat("", "/direct " + defendDiceResults.diceGraphicsLog);
				}
				else {
					if (hqGlobal.diceLogChatWhisper === true) {
						//sendChat("", "/w gm " + attackDiceResults.diceTextLog);
						//sendChat("", "/w " + who + " " + defendDiceResults.diceTextLog);
					}
					else {
						sendChat("", "Atacker " + attackDiceResults.diceTextLog);
						sendChat("", "Defender " + defendDiceResults.diceTextLog);
					}
				}
			}
		}

		switch (attack) {
			case "h":
				damage = attackDiceResults.skull - defendDiceResults.bShield;
				if (damage < 0) damage = 0;
				sendChat("", "Hero does " + damage + " damage");
				break;
			case "m":
				damage = attackDiceResults.skull - defendDiceResults.wShield;
				if (damage < 0) damage = 0;
				sendChat("", "Monster does " + damage + " damage");
				break;
		}
	}

	var processScriptTabs = function (argv, who) {
		// this will run the various other scripts depending upon the chat
		// window command.  Just add another Case statement to add a new command.
		var tmpLogChat = false;
		var tmpGraphicsChat = false;

		var script = argv.shift();
		switch (script) {
			case hqCONSTANTS.HQCOMMAND:
				switch (argv[0]) {
					case "log":
						switch (argv[1]) {
							case "on":
								hqGlobal.diceLogChat = true;
								break;
							case "off":
								hqGlobal.diceLogChat = false;
								break;
							case "multi":
								hqGlobal.diceLogRolledOnOneLine = false;
								break;
							case "single":
								hqGlobal.diceLogRolledOnOneLine = true;
								break;

						}
						break;
					case "w":
						hqGlobal.diceLogChatWhisper = true;
						argv.shift();
						processHeroQuestDiceScript(argv, who);
						hqGlobal.diceLogChatWhisper = false;
						break;
					case "graphics":
						switch (argv[1]) {
							case "on":
								hqGlobal.diceGraphicsChat = true;
								break;
							case "off":
								hqGlobal.diceGraphicsChat = false;
								break;
							case "s":
								hqGlobal.diceGraphicsChatSize = hqCONSTANTS.GRAPHICSIZE.SMALL;
								break;
							case "m":
								hqGlobal.diceGraphicsChatSize = hqCONSTANTS.GRAPHICSIZE.MEDIUM;
								break;
							case "l":
								hqGlobal.diceGraphicsChatSize = hqCONSTANTS.GRAPHICSIZE.LARGE;
								break;
						}
						break;
					case "test":
						hqGlobal.diceTestEnabled = true;
						tmpLogChat = hqGlobal.diceLogChat;
						tmpGraphicsChat = hqGlobal.diceGraphicsChat;
						hqGlobal.diceLogChat = true;
						hqGlobal.diceGraphicsChat = true;
						processHeroQuestDiceScript(["h1", "m1"], who);
						hqGlobal.diceTestEnabled = false;
						hqGlobal.diceLogChat = tmpLogChat;
						hqGlobal.diceGraphicsChat = tmpGraphicsChat;
						break;
					default:
						processHeroQuestDiceScript(argv, who);
						hqGlobal.diceLogChatWhisper = false;
				}
				break;
		}
	};

	on("chat:message", function (msg) {
		// returns the chat window command entered, all in lowercase.

		var chatCommand = msg.content;
		chatCommand = chatCommand.toLowerCase(); //make all characters lowercase

		var argv = chatCommand.split(' ');
		if (msg.type != 'api') {
			return;
		}
		return processScriptTabs(argv, msg.who);
	});
