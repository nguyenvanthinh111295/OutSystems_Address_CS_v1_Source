/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OutSystems.Extensibility.Exceptions {
    public class ExtensibilityException : Exception {

        public string ExtraInfo { get; set; }

        public ExtensibilityException() {
        }

        public ExtensibilityException(Exception cause) : base(cause.Message, cause) {
        }

        public ExtensibilityException(string message) : base(message) {
        }

        public ExtensibilityException(string message, Exception cause) : base(message, cause) {
        }

#if JAVA
        public Exception getCause() {
        }
#endif

    }
}
