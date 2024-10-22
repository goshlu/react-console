// 读取所有环境变量配置文件到process.env
export function wrapperEnv(envConf: Recordable): ViteEnv {
	const ret: any = {};

	for (const envName of Object.keys(envConf)) {
		let realName = envConf[envName].replace(/\\n/g, "\n");
		realName = realName === "true" ? true : realName === "false" ? false : realName;

		if (envName === "VITE_PORT") {
			realName = Number(realName);
		}
		if (envName === "VITE_PROXY") {
			try {
				realName = JSON.parse(realName);
			} catch (error) {
				console.log(error);
			}
		}
		ret[envName] = realName;
		process.env[envName] = realName;
	}
	return ret;
}

/**
 * 是否生成包预览
 */
export function isReportMode(): boolean {
	return process.env.VITE_REPORT === "true";
}
