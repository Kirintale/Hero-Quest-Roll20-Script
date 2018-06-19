// Vampire the Masquerade 5e Alpha Dice Mechanics by Momtahan K.
//
// (Original copyright)
// The following code is an adaptation of that produced by Konrad J. for "Hero Quest Dice Mechanics"//
// copyright pug games 2014
// please feel free to use this script, change it, add to it in any way you feel
// Script created by Roll20 user Konrad J.
//
// Vampire the Masquerade 5e Alpha Dice Mechanics by Momtahan K.
//
// !vtm log on|multi|single|off  // default:on and multi
// outputs dice rolled to the chat window if "on", only the result if "off"
// dice rolled will be on single line if "single" and on multiple lines if "multi"
// !vtm graphics on|off|s|m|l  //default:on and m
// shows dice rolled as graphic, small, medium, or large if "on" or as text if "off"
// !vtm #v #h					// v is the number of standard die, h is the number of hunger die you wish to roll.
//
// !vtm test // this will output every side of every die to the chat window
// !vtm hero // Only for true heroes

var vtmCONSTANTS = {
	VTMCOMMAND: "!vtm",
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

var vtmGlobal = {
	diceLogChat: true,
	diceGraphicsChat: true,
	diceGraphicsChatSize: vtmCONSTANTS.GRAPHICSIZE.MEDIUM,
	diceTextResult: "",
	diceTextResultLog: "",
	diceGraphicResult: "",
	diceGraphicResultLog: "",
	diceTestEnabled: false,
	diceLogRolledOnOneLine: false
};

function rollVTMDice(diceQty, type) {
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

	if (vtmGlobal.diceTestEnabled === true) {
		diceQty = 10;
	}

	for (i = 1; i <= diceQty; i++) {

		if (vtmGlobal.diceTestEnabled === true) {
			roll = roll + 1;
		}
		else {
			roll = randomInteger(10);
		}

		if (type === "v") {
			switch (roll) {
				case 1:
					diceResult.diceTextLog = diceResult.diceTextLog + "(1)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.NIL + s2 + "1" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 2:
					diceResult.diceTextLog = diceResult.diceTextLog + "(2)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.NIL + s2 + "2" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 3:
					diceResult.diceTextLog = diceResult.diceTextLog + "(3)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.NIL + s2 + "3" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 4:
					diceResult.diceTextLog = diceResult.diceTextLog + "(4)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.NIL + s2 + "4" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 5:
					diceResult.diceTextLog = diceResult.diceTextLog + "(5)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.NIL + s2 + "5" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 6:
					diceResult.diceTextLog = diceResult.diceTextLog + "(6)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.SUCCESS + s2 + "6" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 7:
					diceResult.diceTextLog = diceResult.diceTextLog + "(7)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.SUCCESS + s2 + "7" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 8:
					diceResult.diceTextLog = diceResult.diceTextLog + "(8)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.SUCCESS + s2 + "8" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.skulsuccessScorel = diceResult.successScore + 1;
					break;
				case 9:
					diceResult.diceTextLog = diceResult.diceTextLog + "(9)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.SUCCESS + s2 + "9" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 10:
					diceResult.diceTextLog = diceResult.diceTextLog + "(0)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.VAMPIRE.CRIT + s2 + "0" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					diceResult.critScore = diceResult.critScore + 1;
					break;
			}
		} else if (type === "h") {
			switch (roll) {
				case 1:
					diceResult.diceTextLog = diceResult.diceTextLog + "(1)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.FAIL + s2 + "1" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.failScore = diceResult.failScore + 1;
					break;
				case 2:
					diceResult.diceTextLog = diceResult.diceTextLog + "(2)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.NIL + s2 + "2" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 3:
					diceResult.diceTextLog = diceResult.diceTextLog + "(3)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.NIL + s2 + "3" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 4:
					diceResult.diceTextLog = diceResult.diceTextLog + "(4)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.NIL + s2 + "4" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 5:
					diceResult.diceTextLog = diceResult.diceTextLog + "(5)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.NIL + s2 + "5" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.nilScore = diceResult.nilScore + 1;
					break;
				case 6:
					diceResult.diceTextLog = diceResult.diceTextLog + "(6)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.SUCCESS + s2 + "6" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 7:
					diceResult.diceTextLog = diceResult.diceTextLog + "(7)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.SUCCESS + s2 + "7" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 8:
					diceResult.diceTextLog = diceResult.diceTextLog + "(8)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.SUCCESS + s2 + "8" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 9:
					diceResult.diceTextLog = diceResult.diceTextLog + "(9)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.SUCCESS + s2 + "9" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
					diceResult.successScore = diceResult.successScore + 1;
					break;
				case 10:
					diceResult.diceTextLog = diceResult.diceTextLog + "(0)";
					diceResult.diceGraphicsLog = diceResult.diceGraphicsLog + s1 + vtmCONSTANTS.HUNGER.CRIT + s2 + "0" + s3 + vtmGlobal.diceGraphicsChatSize + s4 + vtmGlobal.diceGraphicsChatSize + s5;
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

	var diceTextRolled = "";
	var diceGraphicsRolled = "";
	var attack = "";
	var defend = "";
	var diceQty = "";

	attack = diceToRoll[0].substring(0, 1);
	diceQty = diceToRoll[0].substring(1);
	attackDiceResults = rollVTMDice(diceQty, attack, who);

	defend = diceToRoll[1].substring(0, 1);
	diceQty = diceToRoll[1].substring(1);
	defendDiceResults = rollVTMDice(diceQty, defend, who);

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
		diceTextLog: "Normal" + attackDiceResults.diceTextLog + "Hunger" + defendDiceResults.diceTextLog
	};

	if (vtmGlobal.diceTestEnabled === true) {
		sendChat("", "/desc " + who + ": v1 h1");
	}
	else {
		sendChat(who, "/em " + diceToRoll);
	}

	if (vtmGlobal.diceLogChat === true) {
		if (vtmGlobal.diceLogRolledOnOneLine === true) {
			diceGraphicsRolled = diceTotals.diceGraphicsLog;
			diceTextRolled = diceTotals.diceTextLog;
			if (vtmGlobal.diceGraphicsChat === true) {
				sendChat("", "/direct " + diceGraphicsRolled);
			} else {
				sendChat("", diceTextRolled);
			}
		} else {
			if (vtmGlobal.diceGraphicsChat === true) {
				sendChat("", "/direct " + attackDiceResults.diceGraphicsLog);
				sendChat("", "/direct " + defendDiceResults.diceGraphicsLog);
			} else {
				sendChat("", "Normal " + attackDiceResults.diceTextLog);
				sendChat("", "Hunger " + defendDiceResults.diceTextLog);
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
		case vtmCONSTANTS.VTMCOMMAND:
			switch (argv[0]) {
				case "log":
					switch (argv[1]) {
						case "on":
							vtmGlobal.diceLogChat = true;
							break;
						case "off":
							vtmGlobal.diceLogChat = false;
							break;
						case "multi":
							vtmGlobal.diceLogRolledOnOneLine = false;
							break;
						case "single":
							vtmGlobal.diceLogRolledOnOneLine = true;
							break;

					}
					break;
				case "graphics":
					switch (argv[1]) {
						case "on":
							vtmGlobal.diceGraphicsChat = true;
							break;
						case "off":
							vtmGlobal.diceGraphicsChat = false;
							break;
						case "s":
							vtmGlobal.diceGraphicsChatSize = vtmCONSTANTS.GRAPHICSIZE.SMALL;
							break;
						case "m":
							vtmGlobal.diceGraphicsChatSize = vtmCONSTANTS.GRAPHICSIZE.MEDIUM;
							break;
						case "l":
							vtmGlobal.diceGraphicsChatSize = vtmCONSTANTS.GRAPHICSIZE.LARGE;
							break;
					}
					break;
				case "test":
					vtmGlobal.diceTestEnabled = true;
					tmpLogChat = vtmGlobal.diceLogChat;
					tmpGraphicsChat = vtmGlobal.diceGraphicsChat;
					vtmGlobal.diceLogChat = true;
					vtmGlobal.diceGraphicsChat = true;
					processVampireDiceScript(["v1", "h1"], who);
					vtmGlobal.diceTestEnabled = false;
					vtmGlobal.diceLogChat = tmpLogChat;
					vtmGlobal.diceGraphicsChat = tmpGraphicsChat;
					break;
				case "hero":
					sendChat("The best thing about Hero Quest!", "https://www.youtube.com/watch?v=Cx8sl2uC46A");
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
