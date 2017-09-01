/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Text.RegularExpressions;
using System.Web.UI.HtmlControls;
using System.Xml;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.WebWidgets {

    public class InputFilenameRtWidget : RtWidget {
		private byte[] content = new Byte[0];
        public byte[] Content {
            get { return content; }
            set { content = value; }
        }

		private string type = "";
        public string Type {
            get { return type; }
            set { type = value; }
        }

        private string filename = "";
        public string Filename {
            get { return filename; }
            set { filename = value; }
        }

        public InputFilenameRtWidget(HtmlInputFile inputFile) {
            if (inputFile != null && inputFile.PostedFile != null) {
                this.Filename = Regex.Replace(inputFile.PostedFile.FileName ?? string.Empty, "^.*/|^.*\\\\", "", RegexOptions.Singleline);
                this.Type = inputFile.PostedFile.ContentType ?? string.Empty;
                this.Content = new Byte[inputFile.PostedFile.ContentLength];
                inputFile.PostedFile.InputStream.Read(this.Content, 0, this.Content.Length);
                inputFile.PostedFile.InputStream.Close();
            }
        }

        public override void InnerToXml(XmlElement widgetElem, int detailLevel) {
            VarValue.AppendAttribute(widgetElem, "Content", Content, TypeKind.BinaryData);
            VarValue.AppendAttribute(widgetElem, "Type", Type, TypeKind.Text);
            VarValue.AppendAttribute(widgetElem, "Filename", Filename, TypeKind.Text);
        }

        public override void InnerEvaluateField(VarValue variable, string field) {
            if (field == "content")
                variable.Value = Content;
            else if (field == "type")
                variable.Value = Type;
            else if (field == "filename")
                variable.Value = Filename;
        }
    }
}
