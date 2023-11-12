### Controlling the Prcoess

In many cases a process will consist of multiple steps. You can spread a process over multiple workitem queues. The reasons for doing that includes

- **Reporting**: Easily report on the state of each step in the process
- **Fault tolerance**: To avoid a lot of logic in your code, to handle retries it can be more efficient to split up your code and process to smaller parts that is easy to retry.
- **Human in the loop**: You can create queues that is handled by humans, this is handy if not all parts of the process can be automatic, or can be used as a condition in other queue.
- **Error handling**: If certain actions needs to be done n failire, or you want to add a "human-in-the-loop" to handle failed workitems.
- **Non-lineare flows**: If a flow can go in different directions, and there for different queues, we can route workitems to different queues depenind ong success/failure or by overriding the next queue on the induvidual workitem.
- **Enhanced Security**: Workitems in each queue will inherit the permission from the queue, this way you can limit who can see workitems in each part of the process. 

You can control the process by setting `on success` and `on failure` on the work [item queue](Creating-a-Workitem-Queue). These settings can be overriden for each induvidual workitem by setting `success_wiq` and/or `failed_wiq`. This gives you abseolut control over the process and allows for very complex process logic when neeed.