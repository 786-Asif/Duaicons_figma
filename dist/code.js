/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
figma.showUI(__html__, { width: 300, height: 450 });
figma.ui.onmessage = (msg) => {
    if (msg.type === "create-rectangles") {
        const { values } = msg;
        values.forEach((item) => {
            const icon = figma.createNodeFromSvg(item.content);
            icon.name = item.name;
            icon.backgrounds = [
                { type: "SOLID", opacity: 0, color: { r: 0, g: 0, b: 0 } },
            ];
            icon.x = figma.viewport.center.x;
            icon.y = figma.viewport.center.y;
            icon.resize(100, 100);
            figma.currentPage.appendChild(icon);
            figma.currentPage.selection = [icon];
            figma.viewport.scrollAndZoomIntoView([icon]);
        });
    }
    else if (msg.type === "cancel") {
        figma.closePlugin();
    }
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9DQUFvQyxvQkFBb0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiA0NTAgfSk7XHJcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcclxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJjcmVhdGUtcmVjdGFuZ2xlc1wiKSB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IG1zZztcclxuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gZmlnbWEuY3JlYXRlTm9kZUZyb21TdmcoaXRlbS5jb250ZW50KTtcclxuICAgICAgICAgICAgaWNvbi5uYW1lID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgICBpY29uLmJhY2tncm91bmRzID0gW1xyXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIG9wYWNpdHk6IDAsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBpY29uLnggPSBmaWdtYS52aWV3cG9ydC5jZW50ZXIueDtcclxuICAgICAgICAgICAgaWNvbi55ID0gZmlnbWEudmlld3BvcnQuY2VudGVyLnk7XHJcbiAgICAgICAgICAgIGljb24ucmVzaXplKDEwMCwgMTAwKTtcclxuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFtpY29uXTtcclxuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtpY29uXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gXCJjYW5jZWxcIikge1xyXG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==