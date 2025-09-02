(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/BarcodeScanner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const BarcodeScanner = ()=>{
    _s();
    const [barcode, setBarcode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BarcodeScanner.useEffect": ()=>{
            const handleBarcodeInput = {
                "BarcodeScanner.useEffect.handleBarcodeInput": (event)=>{
                    const { key } = event;
                    if (key === 'Enter') {
                        console.log("Scanned barcode", barcode);
                        setBarcode('');
                    } else if (key !== 'Backspace') {
                        setBarcode({
                            "BarcodeScanner.useEffect.handleBarcodeInput": (prev)=>prev + key
                        }["BarcodeScanner.useEffect.handleBarcodeInput"]);
                    }
                }
            }["BarcodeScanner.useEffect.handleBarcodeInput"];
            window.addEventListener('keydown', handleBarcodeInput);
            return ({
                "BarcodeScanner.useEffect": ()=>{
                    window.removeEventListener('keydown', handleBarcodeInput);
                }
            })["BarcodeScanner.useEffect"];
        }
    }["BarcodeScanner.useEffect"], [
        barcode
    ]);
    console.log(barcode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: barcode,
            readOnly: true,
            placeholder: "Code"
        }, void 0, false, {
            fileName: "[project]/components/BarcodeScanner.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/BarcodeScanner.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BarcodeScanner, "KmOXa/JMBYi82x7HTR1Of01mxoQ=");
_c = BarcodeScanner;
const __TURBOPACK__default__export__ = BarcodeScanner;
var _c;
__turbopack_context__.k.register(_c, "BarcodeScanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_BarcodeScanner_tsx_de69c9ca._.js.map