import dep1 from "./dep1"
import dep2 from "./dep2";

const doSomething = async () => {
	const external = await import("./external");

	console.log(`${dep1()} ${dep2()} - ${external.default()}`);
};

doSomething();
