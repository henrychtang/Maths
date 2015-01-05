package home;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

class RunnableDemo implements Runnable {
	   private Thread t;
	   private String threadName;
		 static Logger log = LogManager.getLogger(RunnableDemo.class.getName());   
	   RunnableDemo( String name){
	       threadName = name;
	       log.info("Creating " +  threadName );
	   }
	   public void run() {
		   log.info("Running " +  threadName );
	      try {
	         for(int i = 4; i > 0; i--) {
	           	 log.info("My Thread: " + threadName + ", " + i);
	           	 log.info("Do Smthg...");
	       	            // Let the thread sleep for a while.
	            Thread.sleep(50);
	         }
	     } catch (InterruptedException e) {
	    	 log.info("Thread " +  threadName + " interrupted.");
	     }
	      log.info("Thread " +  threadName + " exiting.");
	   }
	   
	   public void start ()
	   {
		   log.info("Starting " +  threadName );
	      if (t == null)
	      {
	         t = new Thread (this, threadName);
	         t.start ();
	      }
	   }

	}