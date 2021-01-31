import React from "react";
import "./page.css";
const Footer = () => {
  return (
    <div id="footer">
      <div class="InnerSection">
        -- Add Logo --
        <h2>Company Name</h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </div>
      <div class="InnerSection">
        <h2 class="InnerHeading">Quick Links</h2>
        <ol>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
        </ol>
      </div>
      <div class="InnerSection">
        <h2 class="InnerHeading">Blogs</h2>
        <ol>
          <li>
            <a href="#" target="_blank">
              Title-1
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Title-2
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Title-3
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Title-4
            </a>
          </li>
        </ol>
      </div>
      <div class="InnerSection">
        <h2 class="InnerHeading">Contact Us</h2>
        <ol id="IconList">
          <li>
            <a href="#" target="_blank">
              <img
                class="SocialIcon"
                src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwIC0xLjk4MiAtMS44NDQgMCAtMTMyLjUyMiAtNTEuMDc3KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItMzcuMTA2IiB4Mj0iLTI2LjU1NSIgeTE9Ii03Mi43MDUiIHkyPSItODQuMDQ3Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZDUiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjZmY1NDNlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgzN2FiIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJtMS41IDEuNjMzYy0xLjg4NiAxLjk1OS0xLjUgNC4wNC0xLjUgMTAuMzYyIDAgNS4yNS0uOTE2IDEwLjUxMyAzLjg3OCAxMS43NTIgMS40OTcuMzg1IDE0Ljc2MS4zODUgMTYuMjU2LS4wMDIgMS45OTYtLjUxNSAzLjYyLTIuMTM0IDMuODQyLTQuOTU3LjAzMS0uMzk0LjAzMS0xMy4xODUtLjAwMS0xMy41ODctLjIzNi0zLjAwNy0yLjA4Ny00Ljc0LTQuNTI2LTUuMDkxLS41NTktLjA4MS0uNjcxLS4xMDUtMy41MzktLjExLTEwLjE3My4wMDUtMTIuNDAzLS40NDgtMTQuNDEgMS42MzN6IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIvPjxwYXRoIGQ9Im0xMS45OTggMy4xMzljLTMuNjMxIDAtNy4wNzktLjMyMy04LjM5NiAzLjA1Ny0uNTQ0IDEuMzk2LS40NjUgMy4yMDktLjQ2NSA1LjgwNSAwIDIuMjc4LS4wNzMgNC40MTkuNDY1IDUuODA0IDEuMzE0IDMuMzgyIDQuNzkgMy4wNTggOC4zOTQgMy4wNTggMy40NzcgMCA3LjA2Mi4zNjIgOC4zOTUtMy4wNTguNTQ1LTEuNDEuNDY1LTMuMTk2LjQ2NS01LjgwNCAwLTMuNDYyLjE5MS01LjY5Ny0xLjQ4OC03LjM3NS0xLjctMS43LTMuOTk5LTEuNDg3LTcuMzc0LTEuNDg3em0tLjc5NCAxLjU5N2M3LjU3NC0uMDEyIDguNTM4LS44NTQgOC4wMDYgMTAuODQzLS4xODkgNC4xMzctMy4zMzkgMy42ODMtNy4yMTEgMy42ODMtNy4wNiAwLTcuMjYzLS4yMDItNy4yNjMtNy4yNjUgMC03LjE0NS41Ni03LjI1NyA2LjQ2OC03LjI2M3ptNS41MjQgMS40NzFjLS41ODcgMC0xLjA2My40NzYtMS4wNjMgMS4wNjNzLjQ3NiAxLjA2MyAxLjA2MyAxLjA2MyAxLjA2My0uNDc2IDEuMDYzLTEuMDYzLS40NzYtMS4wNjMtMS4wNjMtMS4wNjN6bS00LjczIDEuMjQzYy0yLjUxMyAwLTQuNTUgMi4wMzgtNC41NSA0LjU1MXMyLjAzNyA0LjU1IDQuNTUgNC41NSA0LjU0OS0yLjAzNyA0LjU0OS00LjU1LTIuMDM2LTQuNTUxLTQuNTQ5LTQuNTUxem0wIDEuNTk3YzMuOTA1IDAgMy45MSA1LjkwOCAwIDUuOTA4LTMuOTA0IDAtMy45MS01LjkwOCAwLTUuOTA4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                class="SocialIcon"
                src="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjEgMGgtMThjLTEuNjU1IDAtMyAxLjM0NS0zIDN2MThjMCAxLjY1NCAxLjM0NSAzIDMgM2gxOGMxLjY1NCAwIDMtMS4zNDYgMy0zdi0xOGMwLTEuNjU1LTEuMzQ2LTMtMy0zeiIgZmlsbD0iIzNiNTk5OSIvPjxwYXRoIGQ9Im0xNi41IDEydi0zYzAtLjgyOC42NzItLjc1IDEuNS0uNzVoMS41di0zLjc1aC0zYy0yLjQ4NiAwLTQuNSAyLjAxNC00LjUgNC41djNoLTN2My43NWgzdjguMjVoNC41di04LjI1aDIuMjVsMS41LTMuNzV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                class="SocialIcon"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojNTBBQkYxOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNjAuMzc3LDMzNy44MjJjMzAuMzMsMTkuMjM2LDY2LjMwOCwzMC4zNjgsMTA0Ljg3NSwzMC4zNjhjMTA4LjM0OSwwLDE5Ni4xOC04Ny44NDEsMTk2LjE4LTE5Ni4xOA0KCQljMC0yLjcwNS0wLjA1Ny01LjM5LTAuMTYxLTguMDY3YzMuOTE5LTMuMDg0LDI4LjE1Ny0yMi41MTEsMzQuMDk4LTM1YzAsMC0xOS42ODMsOC4xOC0zOC45NDcsMTAuMTA3DQoJCWMtMC4wMzgsMC0wLjA4NSwwLjAwOS0wLjEyMywwLjAwOWMwLDAsMC4wMzgtMC4wMTksMC4xMDQtMC4wNjZjMS43NzUtMS4xODYsMjYuNTkxLTE4LjA3OSwyOS45NTEtMzguMjA3DQoJCWMwLDAtMTMuOTIyLDcuNDMxLTMzLjQxNSwxMy45MzJjLTMuMjI3LDEuMDcyLTYuNjA1LDIuMTI2LTEwLjA4OCwzLjEwM2MtMTIuNTY1LTEzLjQxLTMwLjQyNS0yMS43OC01MC4yNS0yMS43OA0KCQljLTM4LjAyNywwLTY4Ljg0MSwzMC44MDUtNjguODQxLDY4LjgwM2MwLDUuMzYyLDAuNjE3LDEwLjU4MSwxLjc4NCwxNS41OTJjLTUuMzE0LTAuMjE4LTg2LjIzNy00Ljc1NS0xNDEuMjg5LTcxLjQyMw0KCQljMCwwLTMyLjkwMiw0NC45MTcsMTkuNjA3LDkxLjEwNWMwLDAtMTUuOTYyLTAuNjM2LTI5LjczMy04Ljg2NGMwLDAtNS4wNTgsNTQuNDE2LDU0LjQwNyw2OC4zMjljMCwwLTExLjcwMSw0LjQzMi0zMC4zNjgsMS4yNzINCgkJYzAsMCwxMC40MzksNDMuOTY4LDYzLjI3MSw0OC4wNzdjMCwwLTQxLjc3NywzNy43NC0xMDEuMDgxLDI4Ljg4NUw2MC4zNzcsMzM3LjgyMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                class="SocialIcon"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojMDA4NEIxOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTEwNy4yNTUsNjkuMjE1YzIwLjg3MywwLjAxNywzOC4wODgsMTcuMjU3LDM4LjA0MywzOC4yMzRjLTAuMDUsMjEuOTY1LTE4LjI3OCwzOC41Mi0zOC4zLDM4LjA0Mw0KCQkJYy0yMC4zMDgsMC40MTEtMzguMTU1LTE2LjU1MS0zOC4xNTEtMzguMTg4QzY4Ljg0Nyw4Ni4zMTksODYuMTI5LDY5LjE5OSwxMDcuMjU1LDY5LjIxNXoiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xMjkuNDMxLDM4Ni40NzFIODQuNzFjLTUuODA0LDAtMTAuNTA5LTQuNzA1LTEwLjUwOS0xMC41MDlWMTg1LjE4DQoJCQljMC01LjgwNCw0LjcwNS0xMC41MDksMTAuNTA5LTEwLjUwOWg0NC43MjFjNS44MDQsMCwxMC41MDksNC43MDUsMTAuNTA5LDEwLjUwOXYxOTAuNzgzDQoJCQlDMTM5LjkzOSwzODEuNzY2LDEzNS4yMzUsMzg2LjQ3MSwxMjkuNDMxLDM4Ni40NzF6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzg2Ljg4NCwyNDEuNjgyYzAtMzkuOTk2LTMyLjQyMy03Mi40Mi03Mi40Mi03Mi40MmgtMTEuNDdjLTIxLjg4MiwwLTQxLjIxNCwxMC45MTgtNTIuODQyLDI3LjYwNg0KCQkJYy0xLjI2OCwxLjgxOS0yLjQ0MiwzLjcwOC0zLjUyLDUuNjU4Yy0wLjM3My0wLjA1Ni0wLjU5NC0wLjA4NS0wLjU5OS0wLjA3NXYtMjMuNDE4YzAtMi40MDktMS45NTMtNC4zNjMtNC4zNjMtNC4zNjNoLTU1Ljc5NQ0KCQkJYy0yLjQwOSwwLTQuMzYzLDEuOTUzLTQuMzYzLDQuMzYzVjM4Mi4xMWMwLDIuNDA5LDEuOTUyLDQuMzYyLDQuMzYxLDQuMzYzbDU3LjAxMSwwLjAxNGMyLjQxLDAuMDAxLDQuMzY0LTEuOTUzLDQuMzY0LTQuMzYzDQoJCQlWMjY0LjgwMWMwLTIwLjI4LDE2LjE3NS0zNy4xMTksMzYuNDU0LTM3LjM0OGMxMC4zNTItMC4xMTcsMTkuNzM3LDQuMDMxLDI2LjUwMSwxMC43OTljNi42NzUsNi42NzEsMTAuODAyLDE1Ljg5NSwxMC44MDIsMjYuMDc5DQoJCQl2MTE3LjgwOGMwLDIuNDA5LDEuOTUzLDQuMzYyLDQuMzYxLDQuMzYzbDU3LjE1MiwwLjAxNGMyLjQxLDAuMDAxLDQuMzY0LTEuOTUzLDQuMzY0LTQuMzYzVjI0MS42ODJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
              />
            </a>
          </li>
        </ol>
      </div>
      <div class="Credits">Made with ❤️ by Me</div>
    </div>
  );
};

export default Footer;
