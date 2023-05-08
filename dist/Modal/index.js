var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styled, { keyframes } from "styled-components";
var Modal = function (_a) {
    var isOpen = _a.isOpen, closeModal = _a.closeModal, children = _a.children;
    var handleClickModalContainer = function (event) {
        event.stopPropagation();
    };
    return isOpen ? (_jsx(BackDrop, __assign({ onClick: closeModal, isOpen: isOpen }, { children: _jsx(ModalContainer, __assign({ onClick: handleClickModalContainer, isOpen: isOpen }, { children: children })) }))) : (_jsx(_Fragment, {}));
};
var BackDrop = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n\n  width: inherit;\n  height: 100vh;\n\n  background: rgba(0, 0, 0, 0.5);\n\n  animation: ", " 0.2s ease-out;\n"], ["\n  position: fixed;\n  top: 0;\n\n  width: inherit;\n  height: 100vh;\n\n  background: rgba(0, 0, 0, 0.5);\n\n  animation: ", " 0.2s ease-out;\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? fadeIn : fadeOut);
});
var ModalContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n\n  box-sizing: border-box;\n  border-radius: 5px 5px 0px 0px;\n\n  background-color: white;\n\n  width: 100%;\n  min-height: 227px;\n\n  animation: ", " 0.2s ease-out;\n"], ["\n  position: absolute;\n  bottom: 0;\n\n  box-sizing: border-box;\n  border-radius: 5px 5px 0px 0px;\n\n  background-color: white;\n\n  width: 100%;\n  min-height: 227px;\n\n  animation: ", " 0.2s ease-out;\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen && slideUp;
});
var fadeIn = keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var fadeOut = keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"])));
var slideUp = keyframes(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  0% {\n    transform: translate(0, 100%);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n"], ["\n  0% {\n    transform: translate(0, 100%);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n"])));
export default Modal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
