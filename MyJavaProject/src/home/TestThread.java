package home;

public class TestThread {
	   public static void main(String args[]) {
	   
	      RunnableDemo R1 = new RunnableDemo( "TankThread");
	      R1.start();
	      
	     // RunnableDemo R2 = new RunnableDemo( "MagicThread");
	     // R2.start();
	   }   
	}