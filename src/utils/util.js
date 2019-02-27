/*
* 字符串去除左空格
*/
export const _trimLeft = (str) =>{
	str = str.replace(/^\s*/g,'');
	return str;
}

/*
* 字符串去除右空格
*/
export const _trimRight = (str) =>{
	str = str.replace(/(\s*$)/g,'');
	return str;
}

/*
* 字符串去除空格
*/
export const _trim = (str) =>{
	str = str.replace(/\s*/g,"");
	return str;
}

/*
* 字符串去除左右空格
*/
export const _trimAside = (str) =>{
	str = str.replace(/^\s*|\s*$/g,"");
	return str;
}
