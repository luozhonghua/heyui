<template>
  <div class="doc">
    <h2>Timeline</h2>
    <p>The timeline shows information.</p>
    <h3>Example</h3>
    <p>Show the timeline, you can use <code>color</code>customize the logo color, <code>icon</code> custom icon, the parent <code>pending</code> set the last loading style.</p>
    <example demo="view/timeline1"></example>
    <h3>Example 2</h3>
    <p>To display the timeline with the time on the left, you can <code>:time="true"</code> set the left-hand style and <code>:time-width="200"</code> set the left-hand width.</p>
    <example demo="view/timeline2"></example>

    <h3>Timeline Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>time</td>
        <td>Whether to show left</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>pending</td>
        <td>Last display loading style</td>
        <td>boolean</td>
        <td>true,false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>timeWidth</td>
        <td>Display width on the left</td>
        <td>number</td>
        <td>-</td>
        <td>100</td>
      </tr>
    </table>

    <h3>TimelineItem Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>color</td>
        <td>Timeline color</td>
        <td>string</td>
        <td>blue,green,yellow,red,#******</td>
        <td>blue</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>icon class</td>
        <td>string</td>
        <td>icon图标</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
