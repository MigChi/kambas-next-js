
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h2><b>Assignment Name</b></h2></label>
      <input id="wd-name" defaultValue="course1234" /><br /><br />
      <textarea id="wd-description" cols={50} rows={10} defaultValue={"The assignment is available online Submit a link to the landing page"}>
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="center" valign="bottom">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr><br/>
        <tr>
          <td align="center" valign="bottom">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" defaultValue={"ASSIGNMENTS"}>
                <option value={"ASSIGNMENTS"}>ASSIGNMENTS</option>
            </select>
          </td>
        </tr><br/>
        <tr>
          <td align="center" valign="bottom">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" defaultValue={"PERCENT"}>
                <option value={"PERCENT"}>Percentage</option>
            </select>
          </td>
        </tr><br/>
        <tr>
          <td align="center" valign="bottom">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type" defaultValue={"ONLINE"}>
                <option value={"ONLINE"}>Online</option>
            </select>
          </td>
        </tr><br/>
        <tr>
          <td>
          </td>
          <td valign="bottom">
            <label htmlFor="wd-submission-type">Online Entry options</label><br/>
            
            <input type="checkbox" name="check-genre" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="check-genre" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Webstire URL</label><br/>

            <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="check-genre" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File uploads</label><br/>
          </td>
        </tr><br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td valign="bottom">
            <label htmlFor="wd-assign-to">Assign to</label><br/>
            <input id="wd-assign-to" defaultValue={"Everyone"} />
          </td>
        </tr><br/>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due</label><br/>
            <input type="date" defaultValue={"2000-01-21"} id="wd-due-date"/><br/>
          </td>
        </tr><br/>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from">Avalaible from </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="wd-available-until">Until</label> <br/>
            <input type="date" defaultValue={"2000-01-21"} id="wd-available-from"/>&nbsp;
            <input type="date" defaultValue={"2000-01-21"} id="wd-available-until"/>
          </td>
        </tr>
        <tfoot>
            <tr>
              <td colSpan={3} align="right">
                <hr />
                <button> Cancel </button> &nbsp;
                <button> Save </button>
              </td>
            </tr>
        </tfoot>
      </table>
    </div>
);}
