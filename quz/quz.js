/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	if (!A['tail']) {
		A['tail'] = B;
	}else {
		dcate(A['tail'], B);
	}
	return A;
}


/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	var arr = toArrayWrap(L);
	var res = arr.splice(start, len);
	return List.list(res);
}

function toArrayWrap(obj) {
	var temp = [];
	var res = toArray(obj);
	function toArray(obj) {
		temp.push(obj['head']);
		if(obj['tail']) {
			obj = toArray(obj['tail']);
		}
		return temp;
	}
	return res;
}
