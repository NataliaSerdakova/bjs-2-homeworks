//Задача № 1
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(JSON.stringify(args));

		const objectInCache = cache.find(item => item.hash === hash);

		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.value, cache);
			return "Из кеша: " + objectInCache.value;
		}

		const result = func(...args);
		console.log("Вычисляем: " + result);

		cache.push({
			hash: hash,
			value: result
		});

		if (cache.length > 5) {
			cache.shift();
		}

		return "Вычисляем: " + result;
	}

	return wrapper;


}

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;

	wrapper.count = 0;
	wrapper.allCount = 0;


	function wrapper(...args) {
		wrapper.allCount++;

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		if (!timeoutId) {
			func.call(this, ...args);
			wrapper.count++;
		}

		timeoutId = setTimeout(() => {
			func.apply(this, args);
			wrapper.count++;
		}, delay);
	}

	return wrapper;

}