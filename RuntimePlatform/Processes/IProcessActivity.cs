/* 
 This source code (the "Generated Software") is generated by the OutSystems Platform 
 and is licensed by OutSystems (http://www.outsystems.com) to You solely for testing and evaluation 
 purposes, unless You and OutSystems have executed a specific agreement covering the use terms and 
 conditions of the Generated Software, in which case such agreement shall apply. 
*/

using System;
using OutSystems.ObjectKeys;
using System.Collections.Generic;
using OutSystems.HubEdition.RuntimePlatform.Processes;
using OutSystems.RuntimeCommon;

namespace OutSystems.HubEdition.RuntimePlatform.Processes {

    public interface IProcessActivity {
        /// <summary>
        /// Method to get the last activity instance in current activity flow
        /// Note: the activity must belong to the same eSpace and Process
        /// </summary>
        /// <param name="targetSSKey"></param>
        /// <returns>The last activity instance in the current flow</returns>
        T GetPrecedentActivity<T>(ObjectKey targetSSKey);

        ActivityVariable<T> GetActivityOutput<T>(ActivityVariable<T> variableDefinition);

        /// <summary>
        /// Action executed before an activity can be open
        /// </summary>
        /// <param name="heContext"></param>
        /// <param name="sessionId"></param>
        /// <param name="requestIsSecure"></param>
        /// <param name="hostname"></param>
        /// <param name="onlyGetUrl"></param>
        /// <param name="failureMessage"></param>
        /// <param name="handlingUrl"></param>
        /// <returns>success or failure</returns>
        bool StartOnOpen(HeContext heContext, string sessionId, bool requestIsSecure, string hostname, bool onlyGetUrl, out string failureMessage, out string handlingUrl);

        /// <summary>
        /// Action executed to reset the openning and user assignment of an activity
        /// </summary>
        /// <param name="heContext"></param>
        /// <param name="activityId"></param>
        /// <param name="resetActivityUser"></param>
        /// <param name="failureMessage"></param>
        /// <returns>success or failure</returns>
        bool StartActivityReset(HeContext heContext, int activityId, bool resetActivityUser, out string failureMessage);
                
        /// <summary>
        /// Action executed to reset the openning and user assignment of an activity
        /// </summary>
        /// <param name="heContext"></param>
        /// <param name="activityId"></param>
        /// <param name="startDate"></param>
        /// <param name="failureMessage"></param>
        /// <returns>success or failure</returns>
        bool StartActivitySchedule(HeContext heContext, int activityId, DateTime startDate, out string failureMessage);

        /// <summary>
        /// Action executed before an activity can be closed
        /// </summary>
        /// <param name="heContext"></param>
        /// <param name="advanceProcess"></param>
        /// <param name="skip"></param>
        /// <param name="skipAll"></param>
        /// <param name="inputs"></param>
        /// <param name="failureMessage"></param>
        /// <param name="nextActivityIds"></param>
        /// <returns>success or failure</returns>
        bool StartOnClose(HeContext heContext, bool advanceProcess, bool skip, bool skipAll, List<Pair<string, object>> inputs, out string failureMessage, out List<Pair<int,ActivityKind>> nextActivityIds);
        
        /// <summary>
        /// Method to execute when and event is triggered
        /// </summary>
        /// <param name="heContext"></param>
        /// <param name="dataId"></param>
        /// <param name="advanceProcess"></param>
        void StartOnEvent(HeContext heContext, string dataId, bool advanceProcess);
        
        /// <summary>
        /// Method to set prepare the event filters associated with the activity
        /// If the filters are already set, then nothing will be changed.
        /// This is necessary to recover lost filters for activities that are already waiting
        /// </summary>
        /// <param name="heContext"></param>
        void StartSetEventFilters(HeContext heContext);

        /// <summary>
        /// Method to remove the event filters associated with the activity
        /// If there are no filters set, then nothing will be changed.
        /// This is necessary to remove filters for activities that are no longer waiting
        /// </summary>
        /// <param name="heContext"></param>
        void StartRemoveEventFilters(HeContext heContext);

        IEnumerable<Triplet<int, ActivityKind, ObjectKey>> StartWork(HeContext heContext, bool isUnattended, ActivityStatus forInitialStatus);

        /// <summary>
        /// Method to execute the activity
        /// </summary>
        /// <param name="heContext"></param>
        /// <param name="isUnattended"></param>
		/// <param name="forInitialStatus"></param>
		/// <param name="previousNextRun"></param>
        /// <returns>The next activity ids</returns>
        IEnumerable<Triplet<int, ActivityKind, ObjectKey>> StartWork(HeContext heContext, bool isUnattended, ActivityStatus forInitialStatus, DateTime previousNextRun);

        bool TerminateActivity(HeContext heContext, bool recursive);

        int ActivityId { get; }
        int ProcessId { get; }

        ActivityKind Kind { get; }

        DateTime ClosedInstant { get; }
        int ClosedBy { get; }
        int ActivityClosedCount { get; }

        bool Expired { get; }
	}

}