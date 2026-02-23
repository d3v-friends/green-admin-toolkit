"use client";
var __addDisposableResource = (this && this.__addDisposableResource) || function (env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;
};
var __disposeResources = (this && this.__disposeResources) || (function (SuppressedError) {
    return function (env) {
        function fail(e) {
            env.error = env.hasError ? new SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while (r = env.stack.pop()) {
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
                    }
                    else s |= 1;
                }
                catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
import { jsx as _jsx } from "react/jsx-runtime";
import gAlert from "./g-alert.js";
import { createRoot } from "react-dom/client";
import Suspend from "../../comp/layout/suspend/index.js";
Promise.prototype.alert = function (book, opts = {}) {
    this.catch((e) => {
        const message = e instanceof Error ? e.message : JSON.stringify(e);
        for (const key in book) {
            if (!message.includes(key))
                continue;
            if (!book[key])
                return;
            return gAlert(book[key], opts);
        }
        return gAlert(message, opts);
    });
};
Promise.prototype.suspend = function (onfulfilled, opts = {}) {
    return this.then(async (value) => {
        const cont = document.createElement("div");
        document.body.appendChild(cont);
        const root = createRoot(cont);
        root.render(_jsx(Suspend, { pending: true, wait: opts.wait, children: opts.children }));
        const defer = () => ({
            [Symbol.dispose]: () => {
                root.unmount();
                cont.remove();
            },
        });
        {
            const env_1 = { stack: [], error: void 0, hasError: false };
            try {
                const _ = __addDisposableResource(env_1, defer(), false);
                return onfulfilled ? await onfulfilled(value) : value;
            }
            catch (e_1) {
                env_1.error = e_1;
                env_1.hasError = true;
            }
            finally {
                __disposeResources(env_1);
            }
        }
    });
};
export default function () {
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS1jaGFpbmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92My9mbi9tb2RhbC9wcm9taXNlLWNoYWluaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNiLE9BQU8sTUFBc0IsTUFBTSxXQUFXLENBQUM7QUFFL0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sT0FBdUIsTUFBTSwyQkFBMkIsQ0FBQztBQVloRSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLElBQStCLEVBQUUsT0FBOEIsRUFBRTtJQUNwRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDaEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRSxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFBRSxTQUFTO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU87WUFFdkIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUMzQixXQUFpRixFQUNqRixPQUE4QixFQUFFO0lBRWhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDaEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQyxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FDVixLQUFDLE9BQU8sSUFDUCxPQUFPLEVBQUUsSUFBSSxFQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUN0QixDQUNGLENBQUM7UUFFRixNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNmLENBQUM7U0FDRCxDQUFDLENBQUM7UUFFSCxDQUFDOzs7Z0JBQ0EsTUFBTSxDQUFDLGtDQUFHLEtBQUssRUFBRSxRQUFBLENBQUM7Z0JBQ2xCLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBNkIsQ0FBQzs7Ozs7Ozs7O1NBQy9FO0lBQ0YsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTztJQUNiLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQyJ9