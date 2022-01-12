export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}
export function renderToast(message, action) {
    let messageText = '';
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFFLFNBQWdCLEVBQUUsSUFBUTtJQUNyRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO0FBQzFCLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFFLE9BQVcsRUFBRSxNQUFVO0lBQ2xELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQTtJQUVwQixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDbkIsV0FBVyxHQUFHOytDQUM2QixPQUFPLENBQUMsSUFBSTthQUM5QyxPQUFPLENBQUMsSUFBSTt5Q0FDZ0IsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSxLQUFJLFNBQVM7O0tBRTdELENBQUE7S0FDRjtJQUVELFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFFdkMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQzNELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixNQUFNLENBQUMsT0FBTyxHQUFHO1lBQ2YsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUM1QyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7YUFDakI7UUFDSCxDQUFDLENBQUE7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQmxvY2sgKGVsZW1lbnRJZDpzdHJpbmcsIGh0bWw6YW55KSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9hc3QgKG1lc3NhZ2U6YW55LCBhY3Rpb246YW55KSB7XG4gIGxldCBtZXNzYWdlVGV4dCA9ICcnXG4gIFxuICBpZiAobWVzc2FnZSAhPSBudWxsKSB7XG4gICAgbWVzc2FnZVRleHQgPSBgXG4gICAgICA8ZGl2IGlkPVwiaW5mby1ibG9ja1wiIGNsYXNzPVwiaW5mby1ibG9jayAke21lc3NhZ2UudHlwZX1cIj5cbiAgICAgICAgPHA+JHttZXNzYWdlLnRleHR9PC9wPlxuICAgICAgICA8YnV0dG9uIGlkPVwidG9hc3QtbWFpbi1hY3Rpb25cIj4ke2FjdGlvbj8ubmFtZSB8fCAn0JfQsNC60YDRi9GC0YwnfTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYFxuICB9XG4gIFxuICByZW5kZXJCbG9jaygndG9hc3QtYmxvY2snLCBtZXNzYWdlVGV4dClcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QtbWFpbi1hY3Rpb24nKVxuICBpZiAoYnV0dG9uICE9IG51bGwpIHtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGFjdGlvbiAhPSBudWxsICYmIGFjdGlvbi5oYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgYWN0aW9uLmhhbmRsZXIoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==