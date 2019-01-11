package NyaGames.Just_Run_2;

import java.util.Collections;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketGameHandler extends TextWebSocketHandler {
	private static Set<WebSocketSession> sessions = Collections.synchronizedSet(new HashSet<WebSocketSession>());
	ObjectMapper mapper = new ObjectMapper();
	boolean debug = true;
	GameController gameController = new GameController();
	Collection<Player> players;

	// Invoked after WebSocket negotiation has succeeded and the WebSocket
	// connection is opened and ready for use.
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		sessions.add(session);
	}

	// Invoked after the WebSocket connection has been closed by either side, or
	// after a transport error has occurred. Although the session may technically
	// still be open, depending on the underlying implementation, sending messages
	// at this point is discouraged and most likely will not succeed.
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		sessions.remove(session);
	}

	// Invoked when a new WebSocket message arrives.
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		synchronized (sessions) {
			JsonNode node = mapper.readTree(message.getPayload());
			ObjectNode json = mapper.createObjectNode();
			
			Player chaser;
			Player escapist;
			switch (node.get("type").asText()) {
			case "JOIN":
				if (gameController.getPlayers().size() == 0) {
					chaser = gameController.newChaser();

					ObjectNode jsonChaser = mapper.createObjectNode();
					jsonChaser.put("type", chaser.getType());
					jsonChaser.put("id", chaser.getId());
					jsonChaser.put("x", chaser.getX());
					jsonChaser.put("y", chaser.getY());
					jsonChaser.put("score", chaser.getScore());
					
					session.sendMessage(new TextMessage(jsonChaser.toString()));
				}else if (gameController.getPlayers().size() == 1) {
					escapist = gameController.newEscapist();

					ObjectNode jsonEscapist = mapper.createObjectNode();
					jsonEscapist.put("type", escapist.getType());
					jsonEscapist.put("id", escapist.getId());
					jsonEscapist.put("x", escapist.getX());
					jsonEscapist.put("y", escapist.getY());
					jsonEscapist.put("score", escapist.getScore());
					
					session.sendMessage(new TextMessage(jsonEscapist.toString()));					
				} 
				break;
			case "GET":
				json.put("type", 'g');
				json.put("size", gameController.getPlayers().size());
				session.sendMessage(new TextMessage(json.toString()));
				break;
			case "CAMBIO":
				players = gameController.getPlayers();				
				chaser = players.iterator().next();
				json.put("type", 'a');
				json.put("cazado", chaser.getCazado());
				session.sendMessage(new TextMessage(json.toString()));
				break;
			case "NIEVEESCAPIST":
				players = gameController.getPlayers();				
				chaser = players.iterator().next();
				json.put("type", 'l');
				json.put("x", chaser.getX());
				json.put("y", chaser.getY());
				json.put("score", chaser.getScore());
				session.sendMessage(new TextMessage(json.toString()));
				break;
			case "CASTILLOESCAPIST":
				players = gameController.getPlayers();				
				chaser = players.iterator().next();
				json.put("type", 'm');
				json.put("x", chaser.getX());
				json.put("y", chaser.getY());
				json.put("score", chaser.getScore());
				session.sendMessage(new TextMessage(json.toString()));
				break;
			case "DESIERTOESCAPIST":
				players = gameController.getPlayers();				
				chaser = players.iterator().next();
				json.put("type", 'n');
				json.put("x", chaser.getX());
				json.put("y", chaser.getY());
				json.put("score", chaser.getScore());
				session.sendMessage(new TextMessage(json.toString()));
				break;
			case "OCEANOESCAPIST":
				players = gameController.getPlayers();				
				chaser = players.iterator().next();
				json.put("type", 'o');
				json.put("x", chaser.getX());
				json.put("y", chaser.getY());
				json.put("score", chaser.getScore());
				session.sendMessage(new TextMessage(json.toString()));
				break;
			case "VOLCANESCAPIST":
				players = gameController.getPlayers();				
				chaser = players.iterator().next();
				json.put("type", 'p');
				json.put("x", chaser.getX());
				json.put("y", chaser.getY());
				json.put("score", chaser.getScore());
				session.sendMessage(new TextMessage(json.toString()));
				break;
			case "LEVELCHASER":
				/*final Iterator<Player> itr = players.iterator();
		        Player lastElement = itr.next();
		        while(itr.hasNext()) {
		        	lastElement=itr.next();
		        }
		        escapist = lastElement;
				escapist.setX(node.get("x").asInt());
				escapist.setY(node.get("y").asInt());
				System.out.println(escapist.toString());*/
				break;
			case "CHASER":
				players = gameController.getPlayers();				
				chaser = players.iterator().next();
				chaser.setX(node.get("x").asInt());
				chaser.setY(node.get("y").asInt());
				chaser.setScore(chaser.getScore()+node.get("score").asInt());
				chaser.setCazado(node.get("cazado").asBoolean());
				System.out.println(chaser.toString());
				break;
			case "ESCAPIST":
				final Iterator<Player> it = players.iterator();
		        Player lastelement = it.next();
		        while(it.hasNext()) {
		        	lastelement=it.next();
		        }
		        escapist = lastelement;
				escapist.setX(node.get("x").asInt());
				escapist.setY(node.get("y").asInt());
				break;
			case "FINALE":
				chaser = players.iterator().next();
				if(chaser.getScore() >= 3) {
					json.put("type", 'y');
				}else {
					json.put("type", 'z');
				}
				session.sendMessage(new TextMessage(json.toString()));
				break;
			default:
				break;
			}
	}
	}
}
