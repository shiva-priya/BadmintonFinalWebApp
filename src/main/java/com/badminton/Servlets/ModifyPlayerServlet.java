package com.badminton.Servlets;

import com.badminton.PlayerDB;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ModifyPlayerServlet", urlPatterns = "/ModifyPlayerServlet")
public class ModifyPlayerServlet extends HttpServlet {


    public ModifyPlayerServlet()
    {

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       String name= req.getParameter("player");
        String role = req.getParameter("playerType");

       // String team = req.getParameter("teamName");
        int bidStatus =Integer.parseInt(req.getParameter("bidStatus"));


        PlayerDB database = new PlayerDB();
     boolean result=   database.modifyPlayer(name,role,bidStatus);

        if (result) {
            resp.getWriter().write("Not inserted");
        } else {
            resp.getWriter().write("Inserted Successfully");
        }

    }
}
