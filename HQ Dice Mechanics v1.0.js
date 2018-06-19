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
	diceGraphicsChat: true,
	diceGraphicsChatSize: hqCONSTANTS.GRAPHICSIZE.MEDIUM,
	diceTextResult: "",
	diceTextResultLog: "",
	diceGraphicResult: "",
	diceGraphicResultLog: "",
	diceTestEnabled: false,
	diceLogRolledOnOneLine: false
};

function rollHQDice(diceQty, type, who) {
	var roll = 0;
	var diceResult = {
		nilScore: 0,
		successScore: 0,
		critScore: 0,
		muddyCritScore: 0,
		failScore: 0,
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

	if (hqGlobal.diceTestEnabled === true) {
		diceQty = 10;
	}

	for (i = 1; i <= diceQty; i++) {

		if (hqGlobal.diceTestEnabled === true) {
			roll = roll + 1;
		}
		else {
			roll = randomInteger(10);
		}

		if (type === "v") {
			switch (roll) {
				case 1:
					diceResult.diceTextLog = diceResult.diceTextLog + "(1)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "1" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 2:
					diceResult.diceTextLog = diceResult.diceTextLog + "(2)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "2" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 3:
					diceResult.diceTextLog = diceResult.diceTextLog + "(3)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "3" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 4:
					diceResult.diceTextLog = diceResult.diceTextLog + "(4)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "4" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 5:
					diceResult.diceTextLog = diceResult.diceTextLog + "(5)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.NIL + s2 + "5" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 6:
					diceResult.diceTextLog = diceResult.diceTextLog + "(6)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.SUCCESS + s2 + "6" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 7:
					diceResult.diceTextLog = diceResult.diceTextLog + "(7)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.SUCCESS + s2 + "7" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 8:
					diceResult.diceTextLog = diceResult.diceTextLog + "(8)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.SUCCESS + s2 + "8" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.skulsuccessScorel = diceResult.successScore + 1;
					break;
				case 9:
					diceResult.diceTextLog = diceResult.diceTextLog + "(9)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.SUCCESS + s2 + "9" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 10:
					diceResult.diceTextLog = diceResult.diceTextLog + "(0)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.VAMPIRE.CRIT + s2 + "0" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					diceResult.critScore = diceResult.critScore + 1;
					break;
			}
		} else if (type === "h") {
			switch (roll) {
				case 1:
					diceResult.diceTextLog = diceResult.diceTextLog + "(1)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.FAIL + s2 + "1" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.failScore = diceResult.failScore + 1;
					break;
				case 2:
					diceResult.diceTextLog = diceResult.diceTextLog + "(2)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.NIL + s2 + "2" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 3:
					diceResult.diceTextLog = diceResult.diceTextLog + "(3)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.NIL + s2 + "3" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 4:
					diceResult.diceTextLog = diceResult.diceTextLog + "(4)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.NIL + s2 + "4" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 5:
					diceResult.diceTextLog = diceResult.diceTextLog + "(5)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.NIL + s2 + "5" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 6:
					diceResult.diceTextLog = diceResult.diceTextLog + "(6)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.SUCCESS + s2 + "6" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 7:
					diceResult.diceTextLog = diceResult.diceTextLog + "(7)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.SUCCESS + s2 + "7" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 8:
					diceResult.diceTextLog = diceResult.diceTextLog + "(8)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.SUCCESS + s2 + "8" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 9:
					diceResult.diceTextLog = diceResult.diceTextLog + "(9)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.SUCCESS + s2 + "9" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 10:
					diceResult.diceTextLog = diceResult.diceTextLog + "(0)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + hqCONSTANTS.HUNGER.CRIT + s2 + "0" + s3 + hqGlobal.diceGraphicsChatSize + s4 + hqGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					diceResult.muddyCritScore = diceResult.muddyCritScore + 1;
					break;
			}
		}
	}

	return diceResult;
}

function processVampireDiceScript(diceToRoll, who) {
	var attackDiceResults = {
		bShield: 0,
		wShield: 0,
		skull: 0,
		nilScore: 0,
		successScore: 0,
		critScore: 0,
		muddyCritScore: 0,
		failScore: 0,
		diceGraphicsLog: "",
		diceTextLog: ""
	};
	var defendDiceResults = {
		bShield: 0,
		wShield: 0,
		skull: 0,
		nilScore: 0,
		successScore: 0,
		critScore: 0,
		muddyCritScore: 0,
		failScore: 0,
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

	var diceTotals = {
		bShield: attackDiceResults.bShield + defendDiceResults.bShield,
		wShield: attackDiceResults.wShield + defendDiceResults.wShield,
		skull: attackDiceResults.skull + defendDiceResults.skull,
		nilScore: attackDiceResults.nilScore + defendDiceResults.nilScore,
		successScore: attackDiceResults.successScore + defendDiceResults.successScore,
		critScore: attackDiceResults.critScore + defendDiceResults.critScore,
		muddyCritScore: attackDiceResults.muddyCritScore + defendDiceResults.muddyCritScore,
		failScore: attackDiceResults.failScore + defendDiceResults.failScore,
		diceGraphicsLog: attackDiceResults.diceGraphicsLog + defendDiceResults.diceGraphicsLog,
		diceTextLog: attackDiceResults.diceTextLog + defendDiceResults.diceTextLog
	};

	if (hqGlobal.diceTestEnabled === true) {
		sendChat("", "/desc " + who + ": h1 m1");
	}
	else {
		sendChat(who, "/em " + diceToRoll);
	}

	if (hqGlobal.diceLogChat === true) {
		if (hqGlobal.diceLogRolledOnOneLine === true) {
			diceGraphicsRolled = diceTotals.diceGraphicsLog;
			diceTextRolled = diceTotals.diceTextLog;
			if (hqGlobal.diceGraphicsChat === true) {
				sendChat("", "/direct " + diceGraphicsRolled);
			} else {
				sendChat("", diceTextRolled);
			}
		} else {
			if (hqGlobal.diceGraphicsChat === true) {
				sendChat("", "/direct " + attackDiceResults.diceGraphicsLog);
				sendChat("", "/direct " + defendDiceResults.diceGraphicsLog);
			} else {
				sendChat("", "Atacker " + attackDiceResults.diceTextLog);
				sendChat("", "Defender " + defendDiceResults.diceTextLog);
			}
		}
	}


	sendChat("", "" + diceTotals.successScore + " successes");
	if (diceTotals.critScore >= 2) {
		sendChat("", "CRITICAL SUCCESS");
	}

	if (diceTotals.muddyCritScore >= 1) {
		sendChat("", "MESSY CRITICAL SUCCESS");
	}

	if (diceTotals.failScore >= 1) {
		sendChat("The Beast", "Feed Me! (Hunger causes you to be distracted)");
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
					processVampireDiceScript(["v1", "h1"], who);
					hqGlobal.diceTestEnabled = false;
					hqGlobal.diceLogChat = tmpLogChat;
					hqGlobal.diceGraphicsChat = tmpGraphicsChat;
					break;
				default:
					processVampireDiceScript(argv, who);
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
