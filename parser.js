/*Used to parse the Scheme Input
 *Author: Jiajie Wu
 *Reference from https://github.com/njoubert/SchemeEval.git
 */

exports.parse = function (line) {
	// FIXME: hardcoded now, but should parse expr and return an sexpr object.
	var parseResult = [];
	var input = line.split(" ");
	
	var isEmpty = function(expr) { 
		return (expr === "");
	};
	var isNumber = function(expr) {
		return !isList(expr) && (!isNaN(expr-0)) && /^[0-9]+(\.[0-9]*)?$/.test(expr); 
	};
	var isString = function (expr) {
    	return !isList(expr) && (/^\".*\"$/.test(expr));
  	}
	var isBoolean = function(expr) {
    	return expr == "#f" || expr == "#t";
 	}
	var isVariable = function(expr) {
    	return !is_list(expr) && (/^[a-zA-Z]+$/.test(expr));
  	}

	var isList = function(expr) {
		return expr && typeof expr === 'object' && expr.constructor === Array;
	};

	console.log(input);
	//Check the input expression
	for (i = 0; i < input.length; i++) {
		if (isEmpty(input[i])) {
			parseResult[i] = "undefined";
			continue;
		} else if (isNumber(input[i])) {
			if (line.indexOf('.') >= 0) {
				parseResult[i] = {"typ": "number", "val": parseFloat(input[i])};
				continue;
			} else {
				parseResult[i] = {"typ": "number", "val": parseInt(input[i])};
				continue;
			}
		} else if (isBoolean(input[i])) {
			parseResult[i] = {"typ": "boolean", "val": input[i]};
		} else if (isString(input[i])) {
			parseResult[i] = {"typ": "string", "val": input[i]};
			console.log("called");
		}else {
			parseResult[i] = "undefined";
		}
	}
	return parseResult;
};


exports.unparse = function(sexpr) {
    if (typeof sexpr === 'Object') {
	return 'oh no, dunno what to display, please fix this code.';
    } else {
	return 'oh no, dunno how to unparse this, please fix this code.';
    }
}

exports.eval = function(sexpr) {
    return sexpr;  // FIXME: unevaluated, for now...
}
