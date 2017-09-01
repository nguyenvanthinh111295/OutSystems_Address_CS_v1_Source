/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;

namespace OutSystems.RuntimeCommon.Utils {
    public class LogThrottle {
        private int timeoutInSeconds;
		
		private DateTime lastLog = DateTime.MinValue;

        public LogThrottle(int timeoutInSeconds) {
			this.timeoutInSeconds = timeoutInSeconds;
		}

        private void WriteErrorWithThrottle<T>(Action<T> writeAction, T message) {
            if ( (DateTime.Now - lastLog).Seconds > timeoutInSeconds) {
                writeAction(message);
            }
            lastLog = DateTime.Now;
        }

        public void WriteErrorWithThrottle(Action<Exception> writeAction, Exception message) {
            WriteErrorWithThrottle<Exception>(writeAction, message);
        }
		
		public void WriteErrorWithThrottle(Action<string> writeAction, string message) {
            WriteErrorWithThrottle<string>(writeAction, message);
		}

    }
}
